export class EmailValueObject {
  email: string;

  constructor(email: string) {
    this.email = this.isValid(email);
  }

  isValid(email: string) {
    email = email.trim();

    const validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = validEmail.test(email);

    if (!isValidEmail) {
      throw new Error('custom error');
    }

    return email;
  }
}
