/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {I18nExampleRoutingModule} from './i18n-example.routing.module';
import {MainComponent} from './main/main.component';
import {BodyComponent} from './body/body.component';
import {HeaderComponent} from './header/header.component';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';
import {ChildComponent} from './child1/child.component';
@NgModule({
  declarations: [
    MainComponent,
    BodyComponent,
    HeaderComponent,
    View1Component,
    View2Component,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    I18nExampleRoutingModule
  ]
})
export class I18nExampleModule {

}
