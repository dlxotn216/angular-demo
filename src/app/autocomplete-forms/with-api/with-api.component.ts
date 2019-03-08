/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {User, UserOption} from '../shared/user.model';
import {Observable} from 'rxjs/index';
import {UserService} from '../shared/user.service';
import {debounceTime, map, startWith, switchMap} from 'rxjs/internal/operators';
@Component({
  selector: 'app-autocomplete-mock',
  templateUrl: './with-api.component.html',
  styleUrls: [],
  providers: [
    UserService
  ]
})
export class WithApiComponent implements OnInit {
  myControl: FormControl = new FormControl();
  filteredUsers: Observable<User[]>;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.filteredUsers = this.myControl.valueChanges
      .pipe(
        debounceTime(200),
        startWith(this.myControl.value == null ? '' : this.myControl.value),
        switchMap(value => this._filter(value))
      );
  }

  private _filter(value: string): Observable<User[]> {
    if (!value) {
      value = '';
    }

    const filterValue = value.toLowerCase();
    return this.userService.getUsers({nameOrEmail: filterValue})
      .pipe(
        map(res => res.result.content)
      );
  }

  private getOptionLabel(user: User) {
    return `${user.name} (${user.email})`;
  }
}
