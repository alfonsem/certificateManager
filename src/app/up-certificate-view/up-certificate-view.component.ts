import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-up-certificate-view',
  templateUrl: './up-certificate-view.component.html',
  styleUrls: ['./up-certificate-view.component.scss']
})
export class UpCertificateViewComponent implements OnInit {
  error: any;
  valid: any;
  constructor(private api: ApiService) {}

  ngOnInit() {
  }

  image: any;

  changeListener($event) : void {
  this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log(myReader.result);
    }
    myReader.readAsDataURL(file);
  }

  uploadCertificate(){
    const { image } = this;
    if (image !== '') {
      this.api
        .upCertficate(image)
        .then(res => {
          this.valid = res;
        })
        .catch(error => {
          this.error = error;
        });
    }
  }

}
