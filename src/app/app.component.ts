import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoStreaming';
  constructor(private router:Router){}
irVideo(){
  this.router.navigate(['videos']);
}
irOpening(){
  this.router.navigate(["opening"])
}
irListas(){
  this.router.navigate(["listas"])
}
irInicio(){
  this.router.navigate(["inicio"])
}
irLogin(){
  this.router.navigate(["loginAdmi"])
}
}
