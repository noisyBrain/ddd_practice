import { hash } from 'bcrypt';

import { BaseValueObject } from '../../shared/ValueObjects/base.vo';

type PasswordProps = {
  value: string;
  hashed: boolean;
};

export class Password extends BaseValueObject<PasswordProps> {
  private constructor(password: PasswordProps) {
    super(password);
  }

  newPassword(password: string) {
    return new Password(password);
  }
}
