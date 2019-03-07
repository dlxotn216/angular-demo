/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ParentComponent} from "./parent/parent.component";
import {Child1Component} from "./child1/child1.component";
import {Child2Component} from "./child2/child2.component";
import {GlobalServiceRoutingModule} from "./globalservice.routing.module";
@NgModule({
  declarations: [
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GlobalServiceRoutingModule
  ]
})
export class GlobalServiceModule {

}
