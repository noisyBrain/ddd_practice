import { BaseValueObject } from './base.vo';

type EmailProps = { localPart: string; domainPart: string };

// TODO: apply method to validate email format
export class Email extends BaseValueObject<EmailProps> {
  readonly _localPart: string;
  readonly _domainPart: string;

  private constructor(email: EmailProps) {
    super(email);
  }

  get localPart() {
    return this._localPart;
  }

  get domainPart() {
    return this._domainPart;
  }

  static create(newEmail: EmailProps) {
    if ((newEmail.localPart.length + newEmail.domainPart.length) > 40) {
      throw new Error("Email must be shorter than 40 characters");
    }

    return new Email(newEmail);
  }
}
