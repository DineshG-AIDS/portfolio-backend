import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserData {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  message: string;
}

export const UserSchema = SchemaFactory.createForClass(UserData);
