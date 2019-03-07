/**
 * Created by taesu on 2019-03-08.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/index";

@Injectable({providedIn: 'root'})
export class CounterService {
  private count: number = 0;
  private counter$: Subject<CounterDto> = new Subject();

  public addCount(from: string) {
    this.count++;
    this.sync(from);
  }

  public sync(from: string) {
    this.counter$.next({count: this.count, message: `published by ${from}`});
  }

  public getCounter(): Subject<CounterDto> {
    return this.counter$;
  }
}
