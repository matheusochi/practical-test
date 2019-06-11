import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  stars: string;
  forks: string;
}

const REPOSITORY_DATA: PeriodicElement[] = [
  {name: 'Angular', stars: '48.9k', forks: '13.2k'},
  {name: 'Angular', stars: '49.9k', forks: '13.2k'},
  {name: 'Angular', stars: '48.9k', forks: '13.2k'}
]

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {

  displayedColumns: string[] = ['name', 'stars', 'forks', 'actions'];
  dataSource = new MatTableDataSource(REPOSITORY_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
