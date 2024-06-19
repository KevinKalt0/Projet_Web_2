import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user';
import { Conversation } from '../conversation/conversation';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field(() => User)
  sender: User;

  @Field(() => Conversation)
  conversation: Conversation;

  @Field(() => Date)
  createdAt: Date;
}
