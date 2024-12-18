import { IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  password: string;
}
