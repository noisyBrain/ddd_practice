import { IUpdateEmailDTO } from '../../../1.domain/profile/interfaces/dtos/updateEmailDTO.interface';

export class UpdateEmailDTO implements IUpdateEmailDTO {
  _oldEmail: string;

  _newEmail: string;

  constructor(oldEmail: string, newEmail: string) {
    this._oldEmail = oldEmail;
    this._newEmail = newEmail;
  }

  getNewEmail(): string {
    return this._newEmail;
  }

  getOldEmail(): string {
    return this._oldEmail;
  }
}
