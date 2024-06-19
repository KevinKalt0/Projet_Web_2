import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user';

@ObjectType()
export class Conversation {
  @Field(() => ID)
  id: string;

  @Field(() => [User])
  participants: User[];

  @Field(() => Date)
  createdAt: Date;
}
