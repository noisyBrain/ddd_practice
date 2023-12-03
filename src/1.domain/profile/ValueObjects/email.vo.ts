import { BaseValueObject } from '../../shared/ValueObjects/base.vo';

type EmailProps = { address: string };

export class Email extends BaseValueObject<EmailProps> {
  address: string;

  private constructor(email: EmailProps) {
    super(email);
  }

  isValid(value: EmailProps): boolean {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.address);
  }

  static create(newEmail: EmailProps) {
    if (newEmail.address) {
      return new Email(newEmail);
    }

    throw new Error('Invalid format');
  }
}
