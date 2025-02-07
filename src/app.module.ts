import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dineshbuddypc:WnY0IfmH54KJML2C@userdata.4f91a.mongodb.net/',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
