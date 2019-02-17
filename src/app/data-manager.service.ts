import { Injectable } from '@angular/core';
import { Certificate } from './models.interfaces';
import { User } from './models.interfaces';
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
    certificates: []
  }

  data2: {
    users: Array < User >
  } = {
    users: []
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
        const certificates = rawCertificates.map(rawCertificate => ({
          serialNumber: rawCertificate.serialNumber,
          notAfer: rawCertificate.notAfer,
          subject: rawCertificate.subject,
          issuer: rawCertificate.issuer,
          alias: rawCertificate.alias,
          nomCliente: rawCertificate.nomCliente,
          repositorio: rawCertificate.repositorio,
          observaciones: rawCertificate.observaciones,
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
  }

  loadUsersFromBackend() {
    this.api
      .getUsers()
      .then((rawUsers: Array<any>) => {
        const users = rawUsers.map(rawUser => ({
          id: rawUser.id,
          username: rawUser.username,
          password: rawUser.password,
        }));
        Promise.all(
          users.map(async (user: User) => {
            return user;
          })
        ).then(users => {
          this.data2.users = users;
        });
      })
      .catch(() => this.router.navigate(['/login']));
  }

  getUsers(){
    this.loadUsersFromBackend();
    return this.data2;
  }
}
