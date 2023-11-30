import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { BasicUpdateComponent } from '../../basic-update/basic-update.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SubscriptionModule } from 'src/app/modules/subscription/subscription.module';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeBannerComponent,
    BenefitsComponent,
    AboutUsComponent,
    TariffsComponent,
  ],
  imports: [
    BasicUpdateComponent,
    CommonModule,
    SubscriptionModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class HomeScreenModule {}
