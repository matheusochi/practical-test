import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public search = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.router.navigateByUrl('user/' + this.search);
  }
}
