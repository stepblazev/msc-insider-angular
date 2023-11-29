import { Component } from '@angular/core';
import { AssetsFilterService } from '../../services/assets-filter.service';

@Component({
  selector: 'app-assets-filter',
  templateUrl: './assets-filter.component.html',
  styleUrls: ['./assets-filter.component.scss'],
})
export class AssetsFilterComponent {
  public isAdditionalOpened: boolean = false;

  // temp
  public inputValues: string[] = [
    'MOEX',
    'MOELIS & COMPANY',
    'A.P.MOELL.-M.NAM A DK1000',
    'LVMH-MOET HENNESSY LOUIS VUITTON',
    'AP MOELLER-MAERSK AS',
    'MOELIS & COMPANY',
    'A.P.MOELL.-M.NAM A DK1000',
    'LVMH-MOET HENNESSY LOUIS VUITTON',
    'AP MOELLER-MAERSK AS',
  ];

  constructor(public _assetsFilterService: AssetsFilterService) {}

  setIsAdditionalOpened(state: boolean) {
    this.isAdditionalOpened = state;
  }

  setFilterName(newName: string) {
    const oldFilter = this._assetsFilterService.filter;
    this._assetsFilterService.setFilter({ ...oldFilter, name: newName });
  }

  resetFilter() {
    this.isAdditionalOpened = false;
  }
}
