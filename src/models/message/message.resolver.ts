import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessagesService } from '../message/message.service';
import { Message } from '../message/message';
import { UsersService } from '../user/users.service';
import { ConversationsService } from '../conversation/conversation.service';
import { User } from '../user/user';
import { Conversation } from '../conversation/conversation';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly usersService: UsersService,
    private readonly conversationsService: ConversationsService
  ) {}

  @Query(() => [Message])
  messages(@Args('conversationId') conversationId: string): Message[] {
    return this.messagesService.findByConversation(conversationId);
  }

  @Mutation(() => Message)
  sendMessage(
    @Args('content') content: string,
    @Args('senderId') senderId: string,
    @Args('conversationId') conversationId: string
  ): Message {
    const sender: User = this.usersService.findOne(senderId);
    const conversation: Conversation = this.conversationsService.findOne(conversationId);
    return this.messagesService.create(content, sender, conversation);
  }
}
