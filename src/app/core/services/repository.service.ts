import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Repository} from '../models';

export class RepositoriesResponse {
  data: Repository[] = [];

  constructor(response?) {
    if (response) {
      for (let repo of response) {
        this.data.push(new Repository(repo));
      }
    }
  }
}

export class RepositoryResponse {
  data: Repository;

  constructor(response?) {
    if (response) {
      this.data = new Repository(response);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private endpoint = 'repos';

  constructor(
    private http: HttpClient,
  ) {
  }

  get(username: string): Observable<any> {
    return this.http.get( 'users/' + username + '/' + this.endpoint)
      .pipe(
        map((data) => {
          data = new RepositoriesResponse(data);
          return data;
        })
      );
  }

  find(username: string, repo: string): Observable<any> {
    return this.http.get(this.endpoint + '/' + username + '/' + repo)
      .pipe(
        map((data) => {
          data = new RepositoryResponse(data);
          return data;
        })
      );
  }
}
