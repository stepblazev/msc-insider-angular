import { Component } from '@angular/core';
import { AssetsFilterService } from './services/assets-filter.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  constructor(public _assetsFilterService: AssetsFilterService) {}
}
