import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/index";
import {map, startWith} from "rxjs/internal/operators";

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
  myControl: FormControl = new FormControl();
  options: Option[] = [];
  filteredOptions: Observable<Option[]>;

  constructor() {

  }

  ngOnInit() {
    this.initPipe();
  }

  private _reloadUserOptions() {
    console.log('check call api');
    setTimeout(() => {
      this.options = [
        {label: 'taesu', value: 'taesu@crscube.co.kr'},
        {label: 'soyoung', value: 'soyoung@crscube.co.kr'},
        {label: 'test', value: 'test@crscube.co.kr'},
        {label: 'gavy', value: 'gavy@crscube.co.kr'}
      ];
      this.initPipe();
    }, 1000);
  }

  private initPipe() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(this.myControl.value == null ? '' : this.myControl.value),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Option[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.value.toLowerCase().includes(filterValue));
  }
}
