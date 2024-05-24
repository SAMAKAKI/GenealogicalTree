/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { AdminService } from '../admin/admin.service';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService, AdminService],
})
export class FeedbackModule {}
