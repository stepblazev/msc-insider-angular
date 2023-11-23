import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthService} from "./auth.service";
import {AuthRepository} from "./repository/auth";
import {AuthMapper} from "./auth.mapper";

@NgModule({
  providers: [
    AuthRepository,
    AuthService,
    AuthMapper
  ],
    declarations: [],
    exports: [
    ],
    imports: [
        CommonModule
    ],
})
export class AuthModule
{
}
