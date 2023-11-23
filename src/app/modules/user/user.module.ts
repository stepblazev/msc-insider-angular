import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from "./user.service";
import {UserRepository} from "./repositories/user";

@NgModule({
  providers: [UserService, UserRepository],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
