/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-13
 */

import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/index';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocaleService {
  private locale;
  private localePublisher: Subject<string> = new Subject();

  constructor(private http: HttpClient) {
  }

  public publishLocale(locale: string) {
    if (!locale) {
      return;
    }

    if (this.locale === locale) {
      return;
    }

    console.log('publish local', locale);

    this.locale = locale;
    this.localePublisher.next(this.locale);
  }

  public getLocalePublisher(): Observable<string> {
    return this.localePublisher;
  }

  public getLocale() {
    return this.locale;
  }
}
