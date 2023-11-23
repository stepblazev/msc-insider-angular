import {Component} from '@angular/core';
import {IsActiveMatchOptions, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public yearNow: number = new Date().getFullYear();

  constructor(private readonly router: Router) {
  }

  public isActive(path: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    };

    return this.router.isActive(path, options);
  }
}
