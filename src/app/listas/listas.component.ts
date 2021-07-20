import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  irVideo(){
    this.router.navigate(['videos']);
  }
}
