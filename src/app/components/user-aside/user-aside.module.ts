import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome'

import {UserAsideComponent} from '@components/user-aside/user-aside.component';

@NgModule({
  declarations: [
    UserAsideComponent
  ],
  exports: [
    UserAsideComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  providers: []
})
export class UserAsideModule {
}
