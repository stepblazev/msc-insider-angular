import { IBaseHttpResponse } from 'src/app/core/http-client-response';
import { ISubscription } from '../models/subscription';

export interface ICurrentSubscriptionResponseDTO
  extends IBaseHttpResponse<ISubscription> {}
