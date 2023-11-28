import { IsEmail } from 'class-validator';

export class EmailValueObject {
  @IsEmail()
  readonly _email: string;

  constructor(email: string) {
    this._email = email;
  }

  newEmail(newEmail: string) {
    return new EmailValueObject(newEmail);
  }
}
