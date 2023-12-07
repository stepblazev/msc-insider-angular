import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { BASE_URL } from 'src/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public yearNow: number = new Date().getFullYear();
  public downloadLink: string = `${BASE_URL}/public.docx`;

  constructor(private readonly router: Router) {}

  public isActive(path: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };

    return this.router.isActive(path, options);
  }
}
