import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataManagerService } from '../data-manager.service';
import { Router } from '@angular/router';
import { Data } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

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
  error: any;
  valid: any;
  
  constructor(private api: ApiService, private router: Router, private dataManager: DataManagerService) {}

  ngOnInit() {
    this.data2 = this.dataManager.getUsers();
    console.log("register data"+JSON.stringify(this.data2));
  }

  //Método para registrarnos usando el método de register de ApiService
  register() {
    if(this.singleSelect=='true'){
      this.admin = true;
    }else{
      this.admin = false;
    }
    const { username, password, admin } = this;

    // this.data2.users.forEach(element => {
    //   if(username.trim() == element.username){
    //     this.router.navigate(['/login']);
    //   }else{
    //     if (username.trim() !== '' && password.trim() !== '') {
    //       this.api
    //         .register(username.trim(), password.trim(), admin)
    //         .then(res => {
    //           this.valid = res;
    //           this.router.navigate(['/board']);
    //           console.log(this.singleSelect);
    //         })
    //         .catch(error => {
    //           this.error = error;
    //         });
    //     }
    //   }
    // });

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

}
