import { IsEmail } from 'class-validator';

export class UpdateEmailValidor {
  @IsEmail()
  oldEmail!: string;

  @IsEmail()
  newEmail!: string;
}
