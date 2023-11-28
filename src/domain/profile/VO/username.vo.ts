export class UsernameValueObject {
  username: string;

  constructor(username: string) {
    this.username = this.isValid(username);
  }

  isValid(username: string) {
    username = username.trim();

    /*
      - Must start with a letter (uppercase or lowercase).
      - Can be followed by zero or more letters (uppercase or lowercase) or digits.
      - Must end with a letter or a digit.
    */
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9]$/;
    const isValidUsername = usernameRegex.test(username);

    if (!isValidUsername) {
      throw new Error('custom error');
    }

    return username;
  }
}
