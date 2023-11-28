import { EmailValueObject } from './VO/email.vo';
import { UsernameValueObject } from './VO/username.vo';

export class Profile {
  username: UsernameValueObject;

  email: EmailValueObject;

  password: string;

  desires: string[]; // NOTE: should be a Desire Model

  interests: string[]; // NOTE: should be an Interest Model
}
