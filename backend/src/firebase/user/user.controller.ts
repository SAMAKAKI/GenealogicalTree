/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interfaces/user.interface';

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

  @Post('sign-up-with-google')
  async createDocumentWithGoogle(@Body() data: User) {
    return this.userService.signUpWithGoogle(data);
  }

  @Post('sign-in-with-google')
  async getDocumentWithGoogle(@Body() loginData: {username: string, email: string}) {
    const { username, email } = loginData
    return this.userService.signInWithGoogle(username, email);
  }
}
