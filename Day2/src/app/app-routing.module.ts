import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FirstComponent } from './first/first.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '', //la stringa vuota rappreenta l'url localhost/4200 cioè la home
    component : HomePageComponent
  },
  {
    path: 'binding',
    component : FirstComponent
  },
  {
    path: 'directives',
    component : DirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
