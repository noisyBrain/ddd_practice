import { IUpdatePasswordDTO } from '../dtos/updatePasswordDTO.interface';
import { IUpdateEmailDTO } from '../dtos/updateEmailDTO.interface';
import { IUpdateUsernameDTO } from '../dtos/updateUsernameDTO.interface';
import { IUpdateInterestDTO } from '../dtos/updateInterestDTO.interface';

export interface IUpdateProfileService {
  updatePassword(passwordDTO: IUpdatePasswordDTO): void;

  updateEmail(emailDTO: IUpdateEmailDTO): void;

  updateUsername(usernameDTO: IUpdateUsernameDTO): void;

  updateInterest(interestDTO: IUpdateInterestDTO): void;
}
