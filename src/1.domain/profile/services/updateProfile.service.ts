import { IUpdateEmailDTO } from '../interfaces/dtos/updateEmailDTO.interface';
import { IUpdateInterestDTO } from '../interfaces/dtos/updateInterestDTO.interface';
import { IUpdatePasswordDTO } from '../interfaces/dtos/updatePasswordDTO.interface';
import { IUpdateUsernameDTO } from '../interfaces/dtos/updateUsernameDTO.interface';

import { IUpdateProfileService } from '../interfaces/services/updateProfile.interface';

export class UpdateProfileService implements IUpdateProfileService {
  updatePassword(passwordDTO: IUpdatePasswordDTO) {
    // some logic
  }

  updateEmail(emailDTO: IUpdateEmailDTO) {
    // - validate this email is unique in the db
    //  - if not exists, returns a new instance of the VO
    //  - VO returned to Infra layer to persist it (and overide the property)
    return;
  }

  updateUsername(usernameDTO: IUpdateUsernameDTO) {
    // - validate this username is unique in the db
    //  - if not exists, returns a new instance of the VO
    //  - VO returned to Infra layer to persist it (and overide the property)
    return;
  }

  updateInterest(interestDTO: IUpdateInterestDTO) {
    // some logic
    return;
  }
}
