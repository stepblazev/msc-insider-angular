import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ILoginPayloadDTO, ILoginResponseDTO } from '../dto/login.dto';
import { IRegisterPayloadDTO, IRegisterResponseDTO } from '../dto/register.dto';
import { BASE_URL } from '../../../../constants';
import { AuthMapper } from '../auth.mapper';
import {
  IResetPasswordStartPayloadDTO,
  IResetPasswordStartResponseDTO,
} from '../dto/reset-password-start.dto';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import {
  IResetPasswordContinuePayloadDTO,
  IResetPasswordContinueResponseDTO,
} from '../dto/reset-password-continue.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  constructor(
    private readonly _http: HttpClient,
    private readonly _authMapper: AuthMapper
  ) {}

  public login(data: ILoginPayloadDTO): Observable<ILoginResponseDTO> {
    return this._http
      .post<ILoginResponseDTO>(`${BASE_URL}/api/v1/auth/login`, data)
      .pipe(retry(2));
  }

  public resetPasswordStart(
    data: IResetPasswordStartPayloadDTO
  ): Observable<IResetPasswordStartResponseDTO> {
    return this._http.post<IResetPasswordStartResponseDTO>(
      `${BASE_URL}/api/v1/password/email`,
      data
    );
  }

  public resetPasswordContinue(
    data: IResetPasswordContinuePayloadDTO
  ): Observable<IResetPasswordContinueResponseDTO> {
    return this._http
      .post<IResetPasswordStartResponseDTO>(
        `${BASE_URL}/api/v1/password/reset`,
        data
      )
      .pipe(retry(2));
  }

  public register(data: IRegisterPayloadDTO): Observable<IRegisterResponseDTO> {
    return this._http
      .post<IRegisterResponseDTO>(
        `${BASE_URL}/api/v1/register`,
        this._authMapper.registerPayloadToRequest(data)
      )
      .pipe(retry(1));
  }

  public logout() {
    this._http
      .post<IRegisterResponseDTO>(`${BASE_URL}/api/v1/auth/logout`, {})
      .pipe(retry(1))
      .subscribe();
  }
}
