import {Component, OnDestroy, OnInit} from '@angular/core';
import {LabelService} from '../shared/label.service';
import {LocaleService} from '../shared/locale.service';
import {isNullOrUndefined} from 'util';
import {Subscription} from 'rxjs/index';
/**
 * Created by taesu on 1019-03-07.
 */

interface FormLabel {
  userId: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit, OnDestroy {

  private locale: string;
  private formLabel: FormLabel;
  private subscriptions: Subscription[] = [];

  constructor(private labelService: LabelService,
              private localeService: LocaleService) {
  }

  ngOnInit(): void {
    if (!isNullOrUndefined(this.localeService.getLocale())) {
      this.getLabels(this.localeService.getLocale());
    }

    this.subscriptions.push(this.localeService.getLocalePublisher().subscribe(locale => {
      console.log('check view1 subscribe');
      this.locale = locale;
      this.getLabels(locale);
    }));
  }

  private getLabels(locale) {
    this.labelService.getLabels(locale)
      .subscribe(res => {
        this.formLabel = Object.assign(res.result);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
