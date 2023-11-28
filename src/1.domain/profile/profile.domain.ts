import { EmailValueObject } from './ValueObjectsO/email.vo';
import { UsernameValueObject } from './ValueObjectsO/username.vo';

export class Profile {
  username: UsernameValueObject;

  email: EmailValueObject;

  password: string;

  desires: string[]; // NOTE: should be a Desire Model

  interests: string[]; // NOTE: should be an Interest Model
}
