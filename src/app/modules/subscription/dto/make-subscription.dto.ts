import { IBaseHttpResponse } from 'src/app/core/http-client-response';
import { ISubscription } from '../models/subscription';

export interface IMakeSubscriptionPayloadDTO {
  tariff_id: number;
}

export interface IMakeSubscriptionResponseDTO
  extends IBaseHttpResponse<ISubscription> {}
