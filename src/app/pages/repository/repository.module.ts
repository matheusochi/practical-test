import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';
import { UserAsideModule } from '@components/user-aside/user-aside.module';
import { MaterialModule } from '@core/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    AngularFontAwesomeModule,
    UserAsideModule,
    MaterialModule
  ],
  declarations: [
    RepositoryComponent
  ]
})
export class RepositoryModule {
}
