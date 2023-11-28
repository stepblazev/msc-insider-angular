import { Component, Input } from '@angular/core';
import { ISignal } from '../../signals.component';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss'],
})
export class AssetsTableComponent {
  @Input() signals: ISignal[];
  @Input() unavalible: boolean = false;
}
