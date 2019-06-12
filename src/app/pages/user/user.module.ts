import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@core/modules/material.module'

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserAsideModule } from '@components/user-aside/user-aside.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    UserAsideModule
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule {
}
