/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-13
 */

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LabelService {
  constructor(private http: HttpClient) {
  }

  public getLabels(locale: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/labels/entries?locale=${locale}`);
  }
}
