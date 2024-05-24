/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { Feedback } from 'src/interfaces/feedback.interface';

@Injectable()
export class FeedbackService {
  constructor( private readonly adminService: AdminService ){}

  async createFeedback(data: Feedback): Promise<{data: {success: {message: string}, error: {message: string}}}>{
    const firestore = this.adminService.getFirestore()

    try {
      const feedbackRef = await firestore.collection('feedbacks').add(data)
      if(feedbackRef.id)
        return { data: { success: { message: 'Successfully sent' }, error: { message: '' }}}
      else
      return { data: { success: { message: '' }, error: { message: 'Something went wrong' }}}
    } catch (error) {
      return { data: { success: {message: ''}, error: { message: "An error occurred while sending message" }}}
    }
  }
}
