import { IsStrongPassword } from 'class-validator';

export class PasswordValueObject {
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 2,
    minLowercase: 4,
    minUppercase: 1,
    minSymbols: 1
  })
  _password: string;

  constructor(password: string) {
    this._password = password;
  }

  newPassword(password: string) {
    return new PasswordValueObject(password);
  }
}
