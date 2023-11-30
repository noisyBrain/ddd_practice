import { BaseValueObject } from '../../shared/ValueObjects/base.vo';

const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{1,14}[a-zA-Z0-9]$/;

export class Username extends BaseValueObject<Username> {
  private _value: string;

  constructor(username: Username) {
    super(username);
  }

  isValid(username: Username): boolean {
    return usernameRegex.test(username._value);
  }

  newUsername(username: Username): Username {
    if (!this.isValid(username)) throw new Error('Username must be valid');

    return new Username(username);
  }
}
