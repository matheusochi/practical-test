import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@core/modules/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
