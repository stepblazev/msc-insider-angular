import { Component } from '@angular/core';
import { AssetsService } from 'src/app/modules/assets/assets.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
})
export class AssetsListComponent {
  constructor(public readonly assetsService: AssetsService) {}
}
