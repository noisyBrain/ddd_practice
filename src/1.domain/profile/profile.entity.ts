import { Email } from './ValueObjects/email.vo';
import { Password } from './ValueObjects/password.vo';
import { Username } from './ValueObjects/username.vo';

export class Profile {
  username: Username;

  email: Email;

  password: Password;

  desires: string[]; // NOTE: should be a Desire Model

  interests: string[]; // NOTE: should be an Interest Model
}
