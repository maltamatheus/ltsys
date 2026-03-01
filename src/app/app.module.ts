//Imports gerados automaticamente
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imports auxiliares
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { IconNamesEnum } from 'ngx-bootstrap-icons';

//Meus imports
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalComponent } from './menu/menu-principal.component';
import { InteressadosComponent } from './pages/cadastros/interessados/interessados.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { TestesComponent } from './testes/testes.component';
import { ConsultaInteressadosComponent } from './pages/consultas/consulta-interessados/consulta-interessados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuPrincipalComponent,
    InteressadosComponent,
    TestesComponent,
    ConsultaInteressadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public iconNames = IconNamesEnum;
 }
