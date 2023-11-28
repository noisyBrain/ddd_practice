import { EmailValueObject } from './ValueObjects/email.vo';
import { PasswordValueObject } from './ValueObjects/password.vo';
import { UsernameValueObject } from './ValueObjects/username.vo';

export class Profile {
  username: UsernameValueObject;

  email: EmailValueObject;

  password: PasswordValueObject;

  desires: string[]; // NOTE: should be a Desire Model

  interests: string[]; // NOTE: should be an Interest Model
}
