import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  @ViewChild('menuContainer') menuContainer!: ElementRef<HTMLDivElement>;
  isTariffsOpened: boolean = false;

  constructor(
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    if (typeof window !== 'undefined') {
      this.initIntersection();
    }
  }

  private initIntersection() {
    const obCallback = (entries: IntersectionObserverEntry[]) => {
      if (this.isActive('/profile')) {
        this.menuContainer.nativeElement.classList.remove('!fixed');
        return;
      }

      if (entries[0].isIntersecting) {
        this.menuContainer.nativeElement.classList.remove('!fixed');
      } else {
        this.menuContainer.nativeElement.classList.add('!fixed');
      }
    };

    const ob = new IntersectionObserver(obCallback);
    ob.observe(
      this.document.body.querySelector('.menu-intersection') as HTMLElement
    );
  }

  public isActive(path: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };

    return this.router.isActive(path, options);
  }

  public isActiveRoute(path: string): boolean {
    return this.router.url.includes(path);
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}