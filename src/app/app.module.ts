//Imports gerados automaticcamente
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imports auxiliares
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { IconNamesEnum } from 'ngx-bootstrap-icons';

//Meus imports
import { CoacheesComponent } from './coachees/coachees.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LtSysMenuComponent } from './lt-sys-menu/lt-sys-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CoacheesComponent,
    HomeComponent,
    LtSysMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public iconNames = IconNamesEnum;
 }
