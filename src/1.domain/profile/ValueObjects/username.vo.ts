import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z0-9]$/;

export class Username {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(8)
  @Matches(usernameRegex, 
    { message: `
      - Must start with a letter (uppercase or lowercase).
      - Can be followed by zero or more letters (uppercase or lowercase) or digits.
      - Must end with a letter or a digit.
` })
  readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  newUsername(username: string): Username {
    return new Username(username);
  }
}
