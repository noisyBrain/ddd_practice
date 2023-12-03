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

  isValid(password: PasswordProps): boolean {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,16}$/.test(
      password.value,
    );
  }

  static async createPassword(password: string) {
    try {
      return new Password({
        value: await hash(password, 10),
        hashed: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
