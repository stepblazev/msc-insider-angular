import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent {
  constructor(private readonly _router: Router) {
    window.scrollTo({ top: 0 });
  }

  public isActive(path: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };

    return this._router.isActive(path, options);
  }
}
