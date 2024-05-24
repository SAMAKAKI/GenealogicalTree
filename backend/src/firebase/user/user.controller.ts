/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  // @UseGuards(AuthGuard('jwt'))
  @Post('register')
  async createDocument(@Body() data: User): Promise<{data: {success: {message: string}, error: {message: string}}}>{
    return this.userService.registerUser(data);
  }

  @Post('login')
  async getDocument(@Body() loginData: {password: string, usernameOrEmail: string}): Promise<{data: {success: {message: string, token: string | null}, error: {message: string}}}> {
    const { password, usernameOrEmail } = loginData
    return this.userService.loginUser(password, usernameOrEmail);
  }

  @Post('sign-up-with-google')
  async createDocumentWithGoogle(@Body() data: User): Promise<{data: {success: {message: string}, error: {message: string}}}> {
    return this.userService.signUpWithGoogle(data);
  }

  @Post('sign-in-with-google')
  async getDocumentWithGoogle(@Body() loginData: {username: string, email: string}): Promise<{data: {success: {message: string, token: string | null}, error: {message: string}}}> {
    const { username, email } = loginData
    return this.userService.signInWithGoogle(username, email);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('current')
  async getDocumentById(@Req() req): Promise<{data: {success: {currentUserData: { [field: string]: string }}, error: {message: string}}}>{
    const user = req.user
    return this.userService.getCurrent(user)
  }
}
