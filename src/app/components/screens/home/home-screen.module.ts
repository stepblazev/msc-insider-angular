import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { TariffListModule } from '../../features/tariff-list/tariff-list.module';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeBannerComponent,
    BenefitsComponent,
    AboutUsComponent,
    TariffsComponent,
  ],
  imports: [CommonModule, TariffListModule],
})
export class HomeScreenModule {}
