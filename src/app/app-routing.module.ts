import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryListComponent } from './components/brewery-list/brewery-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BreweryMapComponent } from './components/brewery-map/brewery-map.component';

const routes: Routes = [
  {
    path: 'breweries',
    component: BreweryListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'map',
    component: BreweryMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BreweryListComponent, HomeComponent, AboutComponent, BreweryMapComponent];