/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './entities/user/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
