/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './firebase/user/user.module';
import { FeedbackModule } from './firebase/feedback/feedback.module';

@Module({
  imports: [UserModule, FeedbackModule],
})
export class AppModule {}
