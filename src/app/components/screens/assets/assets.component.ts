import { Component, OnInit } from '@angular/core';
import { AssetsService } from 'src/app/modules/assets/assets.service';
import { EAssetTypes } from 'src/app/modules/assets/models/asset-types';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  public EAssetTypes = EAssetTypes;

  constructor(public readonly assetsService: AssetsService) {
    window.scrollTo({ top: 0 });
  }

  public ngOnInit(): void {
    this.setTypeHandler(EAssetTypes.CURRENCY);
  }

  public setTypeHandler(type: EAssetTypes): void {
    if (type == this.assetsService.type) return;
    this.assetsService.setType(type);
    this.assetsService.fetchAssetsList();
  }

  public isActive(type: EAssetTypes): boolean {
    return this.assetsService.type == type;
  }
}
