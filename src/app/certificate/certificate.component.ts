import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../models.interfaces';
import { timeout } from 'q';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  date = new Date();
  fecha: string;
  fecha2: string;
  timeOut: boolean  = false;

  @Input() certificate: Certificate;

  constructor() { }

  ngOnInit() {
    console.log(this.certificate.notAfer.split(" ", 1).toString());
    console.log(this.date.toLocaleString().split(" ", 1).toString());
    if(this.fecha2 < this.fecha){
      this.timeOut = false;
    } else{
      this.timeOut = true;
    }
  }

  dowloadFile() {
    
    //let certificateType = this.certificate.subject.split('.')[1];
    let certificateType = "certificado";
    var contentType = "file/"+certificateType;
    var byteCharacters = atob(this.certificate.file64);
    var byteNumbers = new Array(byteCharacters.length);

    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    
    var byteArray = new Uint8Array(byteNumbers);
    
    var blob = new Blob([byteArray], {
      type: contentType
    });
    
    var aux_document = document.createElement("a");
    aux_document.href = URL.createObjectURL(blob);
    aux_document.download = `${this.certificate.subject}`;
    document.body.appendChild(aux_document);
    aux_document.click();
  }

}
