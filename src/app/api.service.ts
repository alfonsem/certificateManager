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
    console.log("HOLaaaaaaa");
    const body = {username, password};
    console.log(username);
    return this.http.post('/api/users', body).toPromise();
  }
}
