import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListasComponent } from './listas/listas.component';
import { OpeningComponent } from './opening/opening.component';
import { VideosComponent } from './videos/videos.component';
import { LoginAdmiComponent } from './login-admi/login-admi.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListasComponent,
    OpeningComponent,
    VideosComponent,
    LoginAdmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
