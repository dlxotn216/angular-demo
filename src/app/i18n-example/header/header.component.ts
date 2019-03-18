import {Component, OnInit} from '@angular/core';
import {Locale} from '../shared/locale.model';
import {LocaleDataService} from '../shared/locale.data.service';
import {LocaleService} from '../shared/locale.service';
/**
 * Created by taesu on 1019-03-07.
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  locales: Locale[] = [];

  constructor(private localeDataService: LocaleDataService,
              private localeService: LocaleService) {
  }

  ngOnInit(): void {
    this.localeDataService.getLocales()
      .subscribe(res => {
        this.locales = res.result;
        this.localeService.publishLocale(this.locales[0].value);
      });
  }

  selectLocale($evnet, value) {
    this.localeService.publishLocale(value);
  }
}
