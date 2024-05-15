/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './firebase/user/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
