import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav-bar-board',
  templateUrl: './nav-bar-board.component.html',
  styleUrls: ['./nav-bar-board.component.scss']
})
export class NavBarBoardComponent implements OnInit {
  admin:boolean;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.admin = this.rutaActiva.snapshot.params.admin;
    this.isAdmin();
  }
  isAdmin(){
    if(this.rutaActiva.snapshot.params.admin == 'administrador'){
      this.admin = true;
      return true;
    }
    this.admin = false;
    return false;

  }
}
