import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent {
  @Input() assetId: number;
  @Input() checked: boolean;

  constructor() {}

  toggleFavorite(event: MouseEvent) {
    this.checked = !this.checked;
  }
}
