import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryListComponent } from './components/brewery-list/brewery-list.component';

const routes: Routes = [
  {
    path: '',
    component: BreweryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
