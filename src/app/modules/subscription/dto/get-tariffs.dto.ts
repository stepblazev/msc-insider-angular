import { IBaseHttpResponse } from 'src/app/core/http-client-response';
import { ITariff } from '../models/tariff';

export interface IGetTariffsResponseDTO extends IBaseHttpResponse<ITariff[]> {}
