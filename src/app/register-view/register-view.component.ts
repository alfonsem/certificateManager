import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataManagerService } from '../data-manager.service';
import { Router } from '@angular/router';
import { Data } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  data2: Data;

  username: string;
  password: string;
  singleSelect: string;
  admin: boolean;
  exist: boolean = false;
  errorField: boolean = false;
  error: any;
  valid: any;
  
  constructor(private api: ApiService, private router: Router, private dataManager: DataManagerService) {}

  ngOnInit() {
    this.data2 = this.dataManager.getUsers();
  }

  isExists(){
    const { username, password, admin } = this;
    for (let i=0; i<this.data2.users.length; i++){
      if(username.trim() == this.data2.users[i].username){
        this.exist = true;
        return true;
      }
    }
    this.exist = false;
    return false;
  }

  //Método para registrarnos usando el método de register de ApiService
  register() {
    if(this.singleSelect=='true'){
      this.admin = true;
    }else{
      this.admin = false;
    }
    const { username, password, admin } = this;
    try{
      if(!this.isExists()){
        if (username.trim() !== '' && password.trim() !== '') {
        this.api
          .register(username.trim(), password.trim(), admin)
          .then(res => {
            this.valid = res;
            var role: string = localStorage.getItem('role');
            this.router.navigate(['/board', role]);
            console.log(this.singleSelect);
          })
          .catch(error => {
            this.error = error;
          });
        }
      }
    }catch{
      this.errorField = true;
    }
  }

}
