import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../models.interfaces';

@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.scss']
})
export class ShowCertificatesComponent implements OnInit {
  @Input() certificates : Array<Certificate>;

  constructor() { }

  ngOnInit() {
  }

}
