import { IsString, IsEmail, Length } from 'class-validator';

export class SignUpDto {
  @IsString()
  @Length(4, 12)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 50)
  password: string;
}
