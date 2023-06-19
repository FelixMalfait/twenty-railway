import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class RefreshTokenCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  isRevoked?: true;

  @Field(() => Boolean, { nullable: true })
  expiresAt?: true;

  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;

  @HideField()
  userId?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}