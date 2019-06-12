import { Component, OnInit } from '@angular/core';
import {Repository, User} from '@core/models';
import {ActivatedRoute} from '@angular/router';
import {RepositoryService} from '@core/services/repository.service';
import {UserService} from '@core/services/user.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})


export class RepositoryComponent implements OnInit {
  public username: string;
  public user: User;
  public repo: string;
  public repository: Repository;
  constructor(
    private repositoryService: RepositoryService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.repo = this.route.snapshot.paramMap.get('repo');

    this.userService.find(this.username)
      .subscribe((response) => {
        this.user = response.data;

        this.repositoryService.find(this.username, this.repo)
          .subscribe((responseRepo) => {
            this.repository = responseRepo.data;
          });
      });
  }
}
