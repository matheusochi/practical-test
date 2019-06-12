import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@core/modules/material.module'

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserAsideModule } from '@components/user-aside/user-aside.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    UserAsideModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule {
}
