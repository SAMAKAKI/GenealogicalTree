/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  // @UseGuards(AuthGuard('jwt'))
  @Post('register')
  async createDocument(@Body() data: User) {
    return this.userService.registerUser(data);
  }

  @Post('login')
  async getDocument(@Body() loginData: {password: string, usernameOrEmail: string}) {
    const { password, usernameOrEmail } = loginData
    return this.userService.loginUser(password, usernameOrEmail);
  }
}
