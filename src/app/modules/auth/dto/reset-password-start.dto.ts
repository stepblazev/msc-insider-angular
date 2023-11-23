import {IBaseHttpResponse} from "../../../core/http-client-response";
import {IUserAuthPersistenceModel} from "../../user/persistence-models/user-auth";

export interface IResetPasswordStartPayloadDTO
{
    email: string;
}

export interface IResetPasswordStartResponseDTO extends IBaseHttpResponse<{}> {
}
