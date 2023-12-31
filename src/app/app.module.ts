import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeScreenModule } from './components/screens/home/home-screen.module';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AssetsScreenModule } from './components/screens/assets/assets-screen.module';
import { ProfileScreenModule } from './components/screens/profile/profile-screen.module';
import { SignalsScreenModule } from './components/screens/signals/signals-screen.module';
import { MainMenuModule } from './components/layout/main-menu/main-menu.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthPopupModule } from './components/features/auth-popup/auth-popup.module';
import { ChartScreenModule } from './components/screens/chart/chart-screen.module';
import { UserService } from './modules/user/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscriptionService } from './modules/subscription/subscription.service';
import { ConfirmationPopupComponent } from './components/ui/confirmation-popup/confirmation-popup.component';
import { HttpErrorService } from './services/http-error.service';

function initializeApp(
  userService: UserService,
  subscriptionService: SubscriptionService
) {
  return async () => {
    if (typeof window !== 'undefined') {
      await userService.updateAuthorize();
      subscriptionService.fetchTariffList();
      if (userService.isAuthorized) {
        subscriptionService.fetchCurrentSubscription();
      }
    }
  };
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    ConfirmationPopupComponent,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
        },
        vertical: {
          position: 'top',
        },
      },
    }),

    MainMenuModule,
    AuthPopupModule,

    HomeScreenModule,
    ChartScreenModule,
    AssetsScreenModule,
    ProfileScreenModule,
    SignalsScreenModule,

    NgOptimizedImage,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [UserService, SubscriptionService],
    },
    {
      provide: ErrorHandler,
      useClass: HttpErrorService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
