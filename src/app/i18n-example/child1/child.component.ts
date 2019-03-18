import {Component, OnDestroy, OnInit} from '@angular/core';
import {LabelService} from '../shared/label.service';
import {LocaleService} from '../shared/locale.service';
import {Subscription} from 'rxjs/index';
/**
 * Created by taesu on 2019-03-07.
 */


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit, OnDestroy {

  private locale: string;
  private subscriptions: Subscription[] = [];

  constructor(private labelService: LabelService,
              private localeService: LocaleService) {
  }

  ngOnInit(): void {
    this.locale = this.localeService.getLocale();

    this.subscriptions.push(this.localeService.getLocalePublisher().subscribe(locale => {
      console.log('check view1 subscribe');
      this.locale = locale;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
