import {IBaseHttpResponse} from "../../../core/http-client-response";
import {IUserAuthPersistenceModel} from "../../user/persistence-models/user-auth";

export interface IRegisterPayloadDTO {
  fio: string;
  email: string;
  password: string;
}

export interface IRegisterRequestDTO {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterResponseDTO extends IBaseHttpResponse<IUserAuthPersistenceModel> {
}
