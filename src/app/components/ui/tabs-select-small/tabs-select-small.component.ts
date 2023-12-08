import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsSelectComponent } from '../tabs-select/tabs-select.component';

@Component({
  standalone: true,
  selector: 'app-tabs-select-small',
  templateUrl: './tabs-select-small.component.html',
  styleUrls: ['./tabs-select-small.component.scss'],
  imports: [CommonModule],
})
export class TabsSelectSmallComponent extends TabsSelectComponent {}
