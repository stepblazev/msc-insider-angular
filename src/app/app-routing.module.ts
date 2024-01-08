import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';

import { ProfileComponent } from './components/screens/profile/profile.component';
import { ProfileTariffsComponent } from './components/screens/profile/profile-tariffs/profile-tariffs.component';
import { ProfileSubscriptionsComponent } from './components/screens/profile/profile-subscriptions/profile-subscriptions.component';

import { SignalsComponent } from './components/screens/signals/signals.component';
import { AssetsComponent } from './components/screens/assets/assets.component';
import { ProfileHomeComponent } from './components/screens/profile/profile-home/profile-home.component';

import { AuthGuard } from './modules/auth/guards/auth.guard';
import { ChartComponent } from './components/screens/chart/chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'MSCInsider - Главная',
  },

  {
    path: 'signals',
    component: SignalsComponent,
    canActivate: [AuthGuard],
    title: 'MSCInsider - Сигналы',
  },

  {
    path: 'chart',
    component: ChartComponent,
    canActivate: [AuthGuard],
    title: 'MSCInsider - Графики',
  },

  {
    path: 'assets',
    title: 'MSCInsider - Активы',
    component: AssetsComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        canActivate: [AuthGuard],
        path: '',
        component: ProfileHomeComponent,
        title: 'MSCInsider - Профиль',
      },
      {
        canActivate: [AuthGuard],
        path: 'tariffs',
        component: ProfileTariffsComponent,
        title: 'MSCInsider - Тарифы',
      },
      {
        canActivate: [AuthGuard],
        path: 'subscriptions',
        component: ProfileSubscriptionsComponent,
        title: 'MSCInsider - Подписки',
      },
    ],
  },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      //   scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
