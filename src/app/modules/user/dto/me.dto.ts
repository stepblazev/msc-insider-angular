import {IBaseHttpResponse} from "../../../core/http-client-response";
import {IUserMePersistenceModel} from "../persistence-models/user-me";

export interface IUserMeResponseDTO extends IBaseHttpResponse<IUserMePersistenceModel> {
}
