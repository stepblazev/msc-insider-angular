import {IBaseHttpResponse} from "../../../core/http-client-response";
import {IUserAuthPersistenceModel} from "../../user/persistence-models/user-auth";

export interface IResetPasswordContinuePayloadDTO
{
  code: string;
  password: string;
}

export interface IResetPasswordContinueResponseDTO extends IBaseHttpResponse<{}> {
}
