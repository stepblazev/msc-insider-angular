import { IBaseHttpResponse } from 'src/app/core/http-client-response';
import { IAsset, IUnavalibleAsset } from '../models/assets';

interface IAssetsListResponse {
  avalible: IAsset[];
  unavalible: IUnavalibleAsset[];
}

export interface IGetAssetsListResponseDTO
  extends IBaseHttpResponse<IAssetsListResponse> {}
