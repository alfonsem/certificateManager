import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  username: string;
  password: string;
  singleSelect: string;
  admin: boolean;
  error: any;
  valid: any;
  constructor(private api: ApiService, private router: Router) {}

  //Método para registrarnos usando el método de register de ApiService
  register() {
    if(this.singleSelect=='true'){
      this.admin = true;
    }else{
      this.admin = false;
    }
    const { username, password, admin } = this;
    if (username.trim() !== '' && password.trim() !== '') {
      this.api
        .register(username.trim(), password.trim(), admin)
        .then(res => {
          this.valid = res;
          this.router.navigate(['/board']);
          console.log(this.singleSelect);
        })
        .catch(error => {
          this.error = error;
        });
    }
  }

  ngOnInit() {
  }

}
