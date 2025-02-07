import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class UserDataDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  message?: string;
}
