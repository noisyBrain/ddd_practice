import { IUpdateEmailDTO } from '../../../1.domain/profile/interfaces/dtos/updateEmailDTO.interface';
import { IUpdateProfileService } from '../../../1.domain/profile/interfaces/services/updateProfile.interface';

export class UpdateEmailUseCase {
  constructor(private readonly _profileService: IUpdateProfileService) {}

  update(param: IUpdateEmailDTO) {
    /*
      call to service to verify if the email already exists
      (should I have a "checkerService" for this action or a method inside "UpdateProfileService" to verify those things?)

      something like:
        const exists = this.profileService.emailAlreadyExists(param.getOldEmail())
    */


    // how should I send 'newEmail' to the profileService? As string or as DTO?
    this._profileService.updateEmail(param.getNewEmail);
  }
}
