import { Body, Controller, Put } from '@nestjs/common';

import { IUpdateProfileService } from '../../1.domain/profile/interfaces/services/updateProfile.interface';

import { UpdateEmailDTO } from '../dtos/profile/updateEmailDTO';

import { UpdateEmailValidor } from '../validators/profile/updateEmail.validator';

@Controller('profile')
export class ProfileController {
  constructor(private readonly _updateProfileUseCase: IUpdateProfileService) {}

  @Put('updateEmail/:profileId')
  updateEmail(@Body() payload: UpdateEmailValidor) {
    const { oldEmail, newEmail } = payload;
    const updateEmailDTO = new UpdateEmailDTO(oldEmail, newEmail);

    return this._updateProfileUseCase.updateEmail(updateEmailDTO);
  }
}
