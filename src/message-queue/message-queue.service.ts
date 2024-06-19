import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Message } from '../models/message/message';

@Injectable()
export class MessageQueueService {
  constructor(@InjectQueue('message-queue') private readonly messageQueue: Queue) {}

  async addMessageToQueue(message: Message): Promise<void> {
    await this.messageQueue.add('sendMessage', message);
  }
}
