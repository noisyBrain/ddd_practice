import { BaseValueObject } from '../../shared/ValueObjects/base.vo';

type UsernameProps = {
  value: string;
}
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{1,14}[a-zA-Z0-9]$/;

export class Username extends BaseValueObject<UsernameProps> {
  private constructor(username: UsernameProps) {
    super(username);
  }

  isValid(username: UsernameProps): boolean {
    return usernameRegex.test(username.value);
  }

  newUsername(username: string): Username {
    if (!this.isValid({ value: username })) throw new Error('Username must be valid');

    return new Username({ value: username });
  }
}
