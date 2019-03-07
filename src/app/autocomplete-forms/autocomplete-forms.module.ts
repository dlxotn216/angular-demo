/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {AutocompleteFormsRoutingModule} from './autocomplete-forms.routing.module';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {WithMockComponent} from './with-mock/with-mock.component';
import {CommonModule} from '@angular/common';
import {WithApiComponent} from './with-api/with-api.component';
@NgModule({
  declarations: [
    WithMockComponent,
    WithApiComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AutocompleteFormsRoutingModule
  ]
})
export class AutocompleteFormsModule {

}
