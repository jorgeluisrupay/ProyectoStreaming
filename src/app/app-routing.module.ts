import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListasComponent } from './listas/listas.component';
import { LoginAdmiComponent } from './login-admi/login-admi.component';
import { OpeningComponent } from './opening/opening.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "listas", component:ListasComponent},
  {path: "opening", component: OpeningComponent},
  {path: "inicio", component: InicioComponent},
  {path: "videos", component:VideosComponent},
  {path: "loginAdmi", component: LoginAdmiComponent},
  {path: "**", redirectTo: "inico"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
