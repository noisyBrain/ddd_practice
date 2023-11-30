import { IsEmail } from 'class-validator';

export class Email {
  @IsEmail()
  readonly _email: string;

  constructor(email: string) {
    this._email = email;
  }

  newEmail(newEmail: string) {
    return new Email(newEmail);
  }
}
