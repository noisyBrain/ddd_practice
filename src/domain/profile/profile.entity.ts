// TODO: apply database Entity

export class ProfileEntity {
  id: string;

  accountId: string;

  username: string;

  email: string;

  password: string;

  desires: string[]; // NOTE: should be a Desire Model

  interests: string[]; // NOTE: should be an Interest Model
}
