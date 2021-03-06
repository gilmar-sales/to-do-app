import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmService } from '@config/typeorm';
import UserModule from '@modules/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      context: ({ req }) => ({ req }),
      playground: true,
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
