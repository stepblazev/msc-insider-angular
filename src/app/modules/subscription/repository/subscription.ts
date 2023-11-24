import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/constants';
import { Observable, retry } from 'rxjs';
import { IGetTariffsResponseDTO } from '../dto/get-tariffs.dto';
import {
  IMakeSubscriptionPayloadDTO,
  IMakeSubscriptionResponseDTO,
} from '../dto/make-subscription.dto';
import { ICurrentSubscriptionResponseDTO } from '../dto/current-subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionRepository {
  constructor(private readonly _http: HttpClient) {}

  public getTariffs(): Observable<IGetTariffsResponseDTO> {
    return this._http
      .get<IGetTariffsResponseDTO>(`${BASE_URL}/api/v1/subscription/tariffs`)
      .pipe(retry(2));
  }

  public getCurrentSubscription(): Observable<IMakeSubscriptionResponseDTO> {
    return this._http
      .get<ICurrentSubscriptionResponseDTO>(`${BASE_URL}/api/v1/subscription`)
      .pipe(retry(2));
  }

  public makeSubscription(
    payload: IMakeSubscriptionPayloadDTO
  ): Observable<IMakeSubscriptionResponseDTO> {
    return this._http
      .post<IMakeSubscriptionResponseDTO>(
        `${BASE_URL}/api/v1/subscription`,
        payload
      )
      .pipe(retry(2));
  }
}
