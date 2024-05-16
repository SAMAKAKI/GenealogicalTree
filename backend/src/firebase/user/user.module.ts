/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { AdminService } from '../admin/admin.service';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv'
import { JwtStrategy } from '../strategies/jwt.strategy';

dotenv.config()
@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET_KEY,
    signOptions: { expiresIn: '1h' }
  })],
  controllers: [UserController],
  providers: [AdminService, UserService, JwtStrategy]
})
export class UserModule {}
