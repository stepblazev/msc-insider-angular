import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/constants';
import { Observable, retry } from 'rxjs';
import { IGetTariffsResponseDTO } from '../dto/get-tariffs.dto';
import {
  IMakeSubscriptionPayloadDTO,
  IMakeSubscriptionResponseDTO,
} from '../dto/make-subscription.dto';

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

  public makeSubscription(
    payload: IMakeSubscriptionPayloadDTO
  ): Observable<IMakeSubscriptionResponseDTO> {
    return this._http
      .post<IMakeSubscriptionResponseDTO>(
        `${BASE_URL}/api/v1/subscription/new`,
        payload
      )
      .pipe(retry(2));
  }
}
