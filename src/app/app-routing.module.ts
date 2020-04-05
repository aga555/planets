import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetsComponent} from './planets/planets.component';

const routes: Routes = [{
  path: 'planets',
  component: PlanetsComponent
}, {
  path: '',
  redirectTo: 'planets',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
