import { Injectable } from '@angular/core';
import { IUserMeResponseDTO } from '../dto/me.dto';
import { Observable, retry } from 'rxjs';
import { BASE_URL } from '../../../../constants';
import { HttpClient } from '@angular/common/http';
import {
  IProfileEditPayloadDTO,
  IProfileEditResponseDTO,
} from '../dto/profile-edit.dto';
import { IChangePhotoResponseDTO } from '../../auth/dto/change-photo.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly _http: HttpClient) {}

  public me() {
    return this._http
      .get<IUserMeResponseDTO>(`${BASE_URL}/api/v1/auth/me`, {
        withCredentials: true,
      })
      .pipe(retry(2));
  }

  public changeProfilePhoto(formData: FormData) {
    return this._http
      .post<IChangePhotoResponseDTO>(
        `${BASE_URL}/api/v1/profile/photo`,
        formData,
        { withCredentials: true }
      )
      .pipe(retry(2));
  }

  public removeProfilePhoto() {
    return this._http
      .delete(`${BASE_URL}/api/v1/profile/photo`, { withCredentials: true })
      .pipe(retry(2));
  }

  public changeProfile(payload: IProfileEditPayloadDTO) {
    return this._http
      .post<IProfileEditResponseDTO>(
        `${BASE_URL}/api/v1/profile/change`,
        payload,
        { withCredentials: true }
      )
      .pipe(retry(2));
  }
}
