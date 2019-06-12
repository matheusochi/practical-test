import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '@core/services/user.service';
import {Repository, User} from '@core/models';
import {ActivatedRoute} from '@angular/router';
import {RepositoryService} from '@core/services/repository.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {
  public username: string;
  public user: User;
  public repositories: Repository[];
  constructor(
    private userService: UserService,
    private repositoryService: RepositoryService,
    private route: ActivatedRoute,
  ) {
  }

  displayedColumns: string[] = ['name', 'stargazers_count', 'forks_count', 'actions'];
  dataSource = new MatTableDataSource(this.repositories);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;

    this.username = this.route.snapshot.paramMap.get('username');

    this.userService.find(this.username)
      .subscribe((response) => {
        this.user = response.data;

        this.repositoryService.get(this.username)
          .subscribe((responseRepos) => {
            this.repositories = responseRepos.data;
            this.dataSource.data = this.repositories;
          });
      });
  }

}
