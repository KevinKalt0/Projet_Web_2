import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { MessagesService } from '../messages/messages.service';

@Processor('message-queue')
export class MessageQueueProcessor {
  constructor(private readonly messagesService: MessagesService) {}

  @Process('sendMessage')
  async handleSendMessage(job: Job) {
    const message = job.data;
    console.log('Processing job:', message);
    // Here you would typically save the message to a database
    this.messagesService.create(message.content, message.sender, message.conversation);
  }
}
