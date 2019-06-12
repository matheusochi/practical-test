import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models';

export class UsersResponse {
  data: User[] = [];

  constructor(response?) {
    if (response) {
      for (let user of response) {
        this.data.push(new User(user));
      }
    }
  }
}

export class UserResponse {
  data: User;

  constructor(response?) {
    if (response) {
      this.data = new User(response);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint = 'users';

  constructor(
    private http: HttpClient,
  ) {
  }

  find(username: string): Observable<any> {
    return this.http.get(this.endpoint + '/' + username)
      .pipe(
        map((data) => {
          data = new UserResponse(data);
          return data;
        })
      );
  }
}
