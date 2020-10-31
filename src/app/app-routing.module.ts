import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'map', component: MapaComponent },
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: '**', redirectTo: 'map', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
