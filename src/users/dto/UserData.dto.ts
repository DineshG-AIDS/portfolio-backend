import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class UserDataDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  message?: string;
}
