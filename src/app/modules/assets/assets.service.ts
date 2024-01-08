import { Injectable } from '@angular/core';
import { EAssetTypes } from './models/asset-types';
import { IAsset, IUnavalibleAsset } from './models/assets';
import { AssetsRepository } from './repository/assets';
import { NotifierService } from 'angular-notifier';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  public type: EAssetTypes | null = null;
  public searchLine: string = '';

  public isLoading: boolean = false;

  public avalibleAssets: IAsset[] = [];
  public unavalibleAssets: IUnavalibleAsset[] = [];

  constructor(
    private readonly _assetsRepository: AssetsRepository,
    private readonly _notifierService: NotifierService
  ) {}

  public setType(newType: EAssetTypes): void {
    this.type = newType;
  }

  public fetchAssetsList(): void {
    this.isLoading = true;
    this._assetsRepository
      .getAssets(this.searchLine, this.type)
      .pipe(
        catchError((error) => {
          this.isLoading = false;
          throw error;
        })
      )
      .subscribe((response) => {
        if (response.success) {
          this.avalibleAssets = response.data.avalible;
          this.unavalibleAssets = response.data.unavalible;
        } else if (response.error) {
          console.error(response.error);
          this._notifierService.notify('error', response.error);
        }
        this.isLoading = false;
      });
  }
}
