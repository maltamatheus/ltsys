import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestesComponent } from './testes/testes.component';
import { ConsultaInteressadosComponent } from './pages/consultas/consulta-interessados/consulta-interessados.component';
import { InteressadosComponent } from './pages/cadastros/interessados/interessados.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'consulta-interessados', component:ConsultaInteressadosComponent},
  { path: 'interessados', component:InteressadosComponent},
  { path: 'testes', component: TestesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
