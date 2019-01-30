import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  username: string;
  password: string;
  error: any;

  constructor( private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

}
