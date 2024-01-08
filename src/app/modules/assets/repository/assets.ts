import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, BASE_URL } from 'src/constants';
import { Observable, retry } from 'rxjs';
import { EAssetTypes } from '../models/asset-types';
import { IGetAssetsListResponseDTO } from '../dto/assets-list';

@Injectable({
  providedIn: 'root',
})
export class AssetsRepository {
  constructor(private readonly _http: HttpClient) {}

  public getAssets(
    search: string,
    type: EAssetTypes | null
  ): Observable<IGetAssetsListResponseDTO> {
    return this._http.get<IGetAssetsListResponseDTO>(
      `${BASE_URL}${API_URL}/assets`,
      {
        params: { search, type: type || '' },
        withCredentials: true,
      }
    );
    //   .pipe(retry(2));
  }
}
