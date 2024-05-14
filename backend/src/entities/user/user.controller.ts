/* eslint-disable prettier/prettier */
import { Controller, Get, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get('/findAll')
  findAll(@Res() res: Response, @Req() req: Request){
    res.status(200).send(this.userService.findAll())
  }

}
