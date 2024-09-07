import { IsString, IsEmail, Length } from 'class-validator';

export class SignUpDto {
  @IsString()
  @Length(5, 12)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 50)
  password: string;
}
