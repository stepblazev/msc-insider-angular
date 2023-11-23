import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../../user/user.service";
import {AuthService, EAuthPopUpState} from "../auth.service";
import {NotifierService} from "angular-notifier";

export const AuthGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const authService = inject(AuthService);
  const notifierService = inject(NotifierService);

  if (!userService.isAuthorized) {
    authService.setAuthPopUpState(EAuthPopUpState.LOGIN);
    notifierService.notify("error", "Для продолжения, пожалуйста, авторизуйтесь!")
    return false;
  }

  return true
};
