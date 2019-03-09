/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  public getUsers(param: any): Observable<any> {
    const queryString = Object.keys(param)
      .map(key => {
        return `${key}=${param[key]}`;
      }).join('&');

    if (queryString) {
      return this.http.get<any>('http://localhost:8080/users/matches?' + queryString);
    } else {
      return this.http.get<any>('http://localhost:8080/users/matches');
    }
  }
}
