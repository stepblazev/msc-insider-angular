import {IBaseHttpResponse} from "../../../core/http-client-response";
import {IUserMePersistenceModel} from "../persistence-models/user-me";

export interface IProfileEditPayloadDTO {
  name: string;
  email: string;
  password?: string;
}

export interface IUpdateUserDataDTO {
  name?: string;
  email?: string;
  photo?: string | null;
}

export interface IProfileEditResponseDTO extends IBaseHttpResponse<{}> {
}
