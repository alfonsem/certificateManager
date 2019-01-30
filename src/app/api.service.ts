import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Importamos el servicio HttpClient al constructor
  constructor(private http: HttpClient) { }

  //Método para registranos usamos el método post llamando a la API
  register(username: string , password: string ){
    const body = {username, password};
    return this.http.post('/api/users', body).toPromise();
  }
}
