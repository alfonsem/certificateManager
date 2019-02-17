import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jira',
  templateUrl: './jira.component.html',
  styleUrls: ['./jira.component.scss']
})
export class JiraComponent implements OnInit {

  userJira: string;
  passwordJira: string;
  componentJira: string;
  descriptionJira: string;
  error: any;
  valid: any;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
  }

  uploadJira(){
    const { userJira, passwordJira, componentJira, descriptionJira } = this;
    if (userJira!=='' && passwordJira!=='' && componentJira!=='' && descriptionJira!=='') {
      this.api
        .upJira(userJira, passwordJira, componentJira, descriptionJira)
        .then(res => {
          this.valid = res;
          var role: string = localStorage.getItem('role');
          this.router.navigate(['/board', role]);
        })
        .catch(error => {
          this.error = error;
        });
    }
  }

}
