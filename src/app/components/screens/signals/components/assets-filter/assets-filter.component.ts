import { Component } from '@angular/core';
import { ESignalTypes } from '../../signals.component';

export interface IAssetsFilter {
  name: string;
  type: ESignalTypes;
  RSI: 'юр' | 'физ';
}

@Component({
  selector: 'app-assets-filter',
  templateUrl: './assets-filter.component.html',
  styleUrls: ['./assets-filter.component.scss'],
})
export class AssetsFilterComponent {
  public isAdditionalOpened: boolean = false;

  setIsAdditionalOpened(state: boolean) {
    this.isAdditionalOpened = state;
  }

  resetFilter() {
    this.isAdditionalOpened = false;
  }
}
