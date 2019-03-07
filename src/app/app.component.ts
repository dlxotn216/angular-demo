import {Component} from '@angular/core';

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideNavIsOpened: boolean = true;

  constructor() {

  }

  private toggleSideNav(opened) {
    console.log('check opened :', opened);
    this.sideNavIsOpened = opened;
  }

  private getToggleSideNavText(): string {
    return this.sideNavIsOpened ? 'Close' : 'Open';
  }
}
