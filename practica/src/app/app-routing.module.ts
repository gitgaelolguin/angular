import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponenteComponent } from './componentes/nuevo-componente/nuevo-componente.component';

const routes: Routes = [
  { path: "practica", component: NuevoComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
