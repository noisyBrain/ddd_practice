import { IUpdatePasswordDTO } from '../dtos/profile/updatePasswordDTO.interface';
import { IUpdateEmailDTO } from '../dtos/profile/updateEmailDTO.interface';
import { IUpdateUsernameDTO } from '../dtos/profile/updateUsernameDTO.interface';
import { IUpdateInterestDTO } from '../dtos/profile/updateInterestDTO.interface';

export interface IUpdateProfileService {
  updatePassword(passwordDTO: IUpdatePasswordDTO): void;

  updateEmail(emailDTO: IUpdateEmailDTO): void;

  updateUsername(usernameDTO: IUpdateUsernameDTO): void;

  updateInterest(interestDTO: IUpdateInterestDTO): void;
}
