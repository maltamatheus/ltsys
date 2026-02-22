import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteressadosComponent } from './pages/interessados/interessados.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'interessados', component: InteressadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
