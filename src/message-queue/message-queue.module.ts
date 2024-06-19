import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MessageQueueService } from './message-queue.service';
import { MessageQueueProcessor } from '../message-queue/message-queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'message-queue',
    }),
  ],
  providers: [MessageQueueService, MessageQueueProcessor],
  exports: [MessageQueueService],
})
export class MessageQueueModule {}
