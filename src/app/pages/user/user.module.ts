import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { MaterialModule } from '@core/modules/material.module'

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularFontAwesomeModule,
    MaterialModule,
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule {
}
