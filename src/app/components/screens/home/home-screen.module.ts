import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SubscriptionModule } from 'src/app/modules/subscription/subscription.module';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { RouterLink } from '@angular/router';
import { SelectComponent } from '../../ui/controls/select/select.component';
import { DateInputComponent } from '../../ui/controls/date-input/date-input.component';
import { ChartPanelComponent } from '../../features/chart-panel/chart-panel.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeBannerComponent,
    BenefitsComponent,
    AboutUsComponent,
    TariffsComponent,
    AnalyticsComponent,
  ],
  imports: [
    ChartPanelComponent,
    DateInputComponent,
    SelectComponent,
    RouterLink,
    CommonModule,
    SubscriptionModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class HomeScreenModule {}
