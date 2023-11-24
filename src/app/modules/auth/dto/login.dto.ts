import { IBaseHttpResponse } from '../../../core/http-client-response';
import { IUserAuthPersistenceModel } from '../../user/persistence-models/user-auth';

export interface ILoginPayloadDTO {
  login: string;
  password: string;
}

export interface ILoginResponseDTO
  extends IBaseHttpResponse<IUserAuthPersistenceModel> {}
