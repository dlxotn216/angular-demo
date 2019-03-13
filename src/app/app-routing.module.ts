import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'autocomplete-forms',
    loadChildren: 'app/autocomplete-forms/autocomplete-forms.module#AutocompleteFormsModule'
  },
  {
    path: 'tabs',
    loadChildren: 'app/tabs/tabs.module#TabsModule'
  },
  {
    path: 'board',
    loadChildren: 'app/board/board.module#BoardModule'
  },
  {
    path: 'globalservice',
    loadChildren: 'app/globalservice/globalservice.module#GlobalServiceModule'
  },
  {
    path: 'i18n',
    loadChildren: 'app/i18n-example/i18n-example.module#I18nExampleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
