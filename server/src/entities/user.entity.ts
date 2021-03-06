import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @HideField()
  @Column()
  password: string;

  @Field()
  @Column({ default: 'NOW()' })
  createdAt: Date;

  @Field()
  @Column({ default: 'NOW()', onUpdate: 'NOW()' })
  updatedAt: Date;
}
