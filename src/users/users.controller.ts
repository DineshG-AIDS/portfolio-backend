import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDataDto } from './dto/UserData.dto';

@Controller('users')
export class UsersController {
  constructor(private UserDataService: UsersService) {}

  @Get()
  GetUserData() {
    return this.UserDataService.GetData();
  }
  @Post()
  @UsePipes(new ValidationPipe())
  SaveToDb(@Body() value: UserDataDto) {
    return this.UserDataService.SaveToDb(value);
  }
}
