import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserData } from 'src/Schema/User.schema';
import { UserDataDto } from './dto/UserData.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserData.name) private userModel: Model<UserData>) {}
  SaveToDb(DataDto: UserDataDto) {
    const NewDoc = new this.userModel(DataDto);
    return NewDoc.save();
  }
  GetData() {
    return this.userModel.find();
  }
}
