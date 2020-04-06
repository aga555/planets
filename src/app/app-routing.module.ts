import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetsComponent} from './planets/planets.component';
import {PlanetDetailComponent} from './planet-detail/planet-detail.component';
import {BlackHoleComponent} from './black-hole/black-hole.component';

const routes: Routes = [{
  path: 'planets',
  component: PlanetsComponent
},
  {
    path: '',
    redirectTo: 'planets',
    pathMatch: 'full'
  },
  {
    path: 'planets/:id',
    component: PlanetDetailComponent
  },
  {path: '**', component: BlackHoleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
