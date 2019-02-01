import { Injectable } from '@angular/core';
import { Certificate } from './models.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor() { }
  data: {
    certificates: Array < Certificate >
  } = {
    certificates: [
      {
        id: 1,
        alias: 'alias 1',
        issuingEntity: 'entity 1',
        serialNumber: 'serial 1',
        subject: 'subject 1',
        expirationDate: new Date(),
        password: 'password',
        idOrganism: 'organism',
        clientName: 'client',
        //integrationsList: Array<string>;
        contactUser: 'contact',
        repository: 'repository',
        observations: 'observations'
      },
      {
        id: 2,
        alias: 'alias 2',
        issuingEntity: 'entity 2',
        serialNumber: 'serial 2',
        subject: 'subject 2',
        expirationDate: new Date(),
        password: 'password',
        idOrganism: 'organism',
        clientName: 'client',
        //integrationsList: Array<string>;
        contactUser: 'contact',
        repository: 'repository',
        observations: 'observations'
      },
    ]
  }

  getData(){
    return this.data;
  }
}
