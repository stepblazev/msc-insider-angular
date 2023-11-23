import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public svgPageNamePath: string | undefined;

  constructor(private readonly router: Router)
  {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.svgPageNamePath = this.getSvgAssetByPage();
      }
    });
  }

  private getSvgAssetByPage(): string | undefined {
    let path = '';
    let url = this.router.url.split('?')[0];

    if (url.length === 1 && url === '/') {
      path += "home"
    }

    if (url.includes('profile')) {
      path += "profile"
    }

    if (url.includes('chart')) {
      path += "chart"
    }

    if (url.includes('signals')) {
      path += "signals"
    }

    if (url.includes('assets')) {
      path += "assets"
    }

    if (path.length) {
      return "/assets/images/common/header/" + path + ".svg";
    }

    return undefined;
  }
}
