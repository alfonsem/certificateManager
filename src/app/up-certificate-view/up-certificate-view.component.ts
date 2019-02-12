import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-up-certificate-view',
  templateUrl: './up-certificate-view.component.html',
  styleUrls: ['./up-certificate-view.component.scss']
})
export class UpCertificateViewComponent implements OnInit {
  error: any;
  valid: any;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
  }

  alias: any;
  nomCLiente: any;
  repositorio: any;
  observaciones: any;
  image: any;
  new_image: any;

  changeListener($event) : void {
  this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      this.new_image = this.image.replace("data:application/x-pkcs12;base64,", "");
      console.log(myReader.result);
    }
    myReader.readAsDataURL(file);
  }

  uploadCertificate(){
    const { image, alias, nomCliente, repositorio, observaciones } = this;
    if (image !== '') {
      this.api
        .upCertficate(this.new_image, alias, nomCliente, repositorio, observaciones)
        .then(res => {
          this.valid = res;
          this.router.navigate(['/board']);
        })
        .catch(error => {
          this.error = error;
        });
    }
  }

}
