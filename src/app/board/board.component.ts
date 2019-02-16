import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Router, Data } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  data: Data;
  

  constructor(private dataManager: DataManagerService, private router: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.dataManager.getData();
    console.log(JSON.stringify(this.data));
    console.log(this.rutaActiva.snapshot.params.admin);
  }

}
