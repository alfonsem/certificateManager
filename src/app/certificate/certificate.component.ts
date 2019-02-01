import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../models.interfaces';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  @Input() certificate: Certificate;

  constructor() { }

  ngOnInit() {
    console.log("Hola certificate" + JSON.stringify(this.certificate));
  }

}
