import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, Data } from '@angular/router';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  @Output () adminLunch = new EventEmitter();

  data: Data;
  username: string;
  password: string;
  admin: boolean;
  error: any;
  res: any;
  exist: boolean = true;

  constructor( private api: ApiService, private router: Router, private dataManager: DataManagerService) { }

  ngOnInit() {
    this.data = this.dataManager.getUsers();
  }

  isAdmin(){
    const { username, password, admin } = this;
    for (let i=0; i<this.data.users.length; i++){
      if(this.data.users[i].username == username){
        if(this.data.users[i].admin='true'){
          this.exist = true;
          return true;
        }
      }
      this.exist = false;
    return false;
    }
    
  }

  //Método para logearnos, usamos el método de login de ApiService
  login() {
    const { username, password } = this;
    if (username.trim() !== '' && password.trim() !== '') {
      this.api
        .login(username.trim(), password.trim())
        .then(() => {
          this.error = undefined;
          if(this.isAdmin()==true) {
            console.log("Soy administrador");
            this.adminLunch.emit({admin: this.admin});
            this.router.navigate(['/board','administrador']);
          }else{
            console.log("No soy administrador");
            this.adminLunch.emit({admin: this.admin});
            this.router.navigate(['/board','usuario']);
          }
        })
        .catch(error => {
          this.error = error;
        });
    }
  }

}
