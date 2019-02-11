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
  res: any;
  exist: boolean = true;

  constructor( private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  //Método para logearnos, usamos el método de login de ApiService
  login() {
    const { username, password } = this;
    if (username.trim() !== '' && password.trim() !== '') {
      this.api
        .login(username.trim(), password.trim())
        .then(() => {
          this.error = undefined;
          this.router.navigate(['/board']);
        })
        .catch(error => {
          this.error = error;
        });
    }
  }

}
