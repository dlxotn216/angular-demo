/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserOption} from '../shared/user.model';
import {Observable} from 'rxjs/index';
import {map, startWith} from 'rxjs/internal/operators';
import {mockUsers} from '../shared/mock-users';
@Component({
  selector: 'app-autocomplete-mock',
  templateUrl: './with-mock.component.html',
  styleUrls: ['./with-mock.component.css']
})
export class WithMockComponent implements OnInit {
  myControl: FormControl = new FormControl();
  users: UserOption[] = [];
  filteredUsers: Observable<UserOption[]>;

  constructor() {

  }

  ngOnInit() {
    this.initPipe();
  }

  private reloadUserOptions() {
    console.log('check call api');
    setTimeout(() => {
      this.users = mockUsers;
      this.initPipe();
    }, 1000);
  }

  private getOptionLabel(user: UserOption) {
    return `${user.label}`;
  }

  private initPipe() {
    this.filteredUsers = this.myControl.valueChanges
      .pipe(
        startWith(this.myControl.value == null ? '' : this.myControl.value),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): UserOption[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user => user.label.toLowerCase().includes(filterValue));
  }
}
