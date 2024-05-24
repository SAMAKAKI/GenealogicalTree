/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from 'src/interfaces/feedback.interface';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('createFeedback')
  async createDocument(@Body() data: Feedback): Promise<{data: {success: {message: string}, error: {message: string}}}>{
    return this.feedbackService.createFeedback(data)
  }
}
