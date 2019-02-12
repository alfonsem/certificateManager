import { Injectable } from '@angular/core';
import { Certificate } from './models.interfaces';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private api: ApiService, private router: Router) { }
  data: {
    certificates: Array < Certificate >
  } = {
    certificates: [
      // {
      //   id: 1,
      //   alias: 'alias 1',
      //   issuingEntity: 'entity 1',
      //   serialNumber: 'serial 1',
      //   subject: 'subject 1',
      //   expirationDate: '',
      //   password: 'password',
      //   idOrganism: 'organism',
      //   clientName: 'client',
      //   integrationsList: "",
      //   contactUser: 'contact',
      //   repository: 'repository',
      //   observations: 'observations'
      // },
      // {
      //   id: 2,
      //   alias: 'alias 2',
      //   issuingEntity: 'entity 2',
      //   serialNumber: 'serial 2',
      //   subject: 'subject 2',
      //   expirationDate: '',
      //   password: 'password',
      //   idOrganism: 'organism',
      //   clientName: 'client',
      //   integrationsList: "",
      //   contactUser: 'contact',
      //   repository: 'repository',
      //   observations: 'observations'
      // },
    ]
  }

  getData(){
    this.loadDataFromBackend();
    return this.data;
  }

  //Método para recibir todos los datos que tenemos guardados en la API, recibimos certificados
  loadDataFromBackend() {
    this.api
      .getCertificates()
      .then((rawCertificates: Array<any>) => {
        console.log(rawCertificates);
        const certificates = rawCertificates.map(rawCertificate => ({
          serialNumber: rawCertificate.serialNumber,
          notAfer: rawCertificate.notAfer,
          subject: rawCertificate.subject,
          issuer: rawCertificate.issuer,
          alias: rawCertificate.alias,
          nomCliente: rawCertificate.nomCliente,
          repositorio: rawCertificate.repositorio,
          observaciones: rawCertificate.observaciones
        }));
        Promise.all(
          certificates.map(async (certificate: Certificate) => {
            return certificate;
          })
        ).then(certificates => {
          this.data.certificates = certificates;
        });
      })
      .catch(() => this.router.navigate(['/login']));
      console.log(JSON.stringify(this.data));
  }
}
