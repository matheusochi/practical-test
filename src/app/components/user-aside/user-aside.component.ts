import {Component, Input} from '@angular/core';

import {User} from '@core/models';

@Component({
  selector: 'app-user-aside',
  templateUrl: './user-aside.component.html',
  styleUrls: ['./user-aside.component.scss']
})

export class UserAsideComponent {
  @Input() user: User;
}
