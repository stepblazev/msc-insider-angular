import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, BASE_URL } from 'src/constants';
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
      .get<IGetTariffsResponseDTO>(`${BASE_URL}${API_URL}/subscription/tariffs`)
      .pipe(retry(2));
  }

  public getCurrentSubscription(): Observable<IMakeSubscriptionResponseDTO> {
    return this._http
      .get<ICurrentSubscriptionResponseDTO>(
        `${BASE_URL}${API_URL}/subscription/current`,
        { withCredentials: true }
      )
      .pipe(retry(2));
  }

  public updateSubscription(
    payload: IMakeSubscriptionPayloadDTO
  ): Observable<IMakeSubscriptionResponseDTO> {
    return this._http
      .post<IMakeSubscriptionResponseDTO>(
        `${BASE_URL}${API_URL}/subscription/update`,
        payload,
        { withCredentials: true }
      )
      .pipe(retry(2));
  }
}
