import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './models/user/users.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';
import { MessageQueueModule } from './message-queue/message-queue.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    UsersModule,
    ConversationsModule,
    MessagesModule,
    MessageQueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
