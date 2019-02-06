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

  //Método para logearnos usamos el método de la API, nos devuelve el token que necesitamos y lo
  //guardamos en LocalStorage para ppoder utlizarlo cuando nos haga falta
  login(username: string, password: string) {
    const body = { username, password };

    return new Promise((resolve, reject) => {
      this.http
        .post('/api/auth', body)
        .toPromise()
        .then(() => {
          resolve(200)
        })
        .catch(maybeNotAndError => {
          console.log(maybeNotAndError);
        });
    });
  }

  //Método para recibir todas los certificados que tenemos en la API
  getCertificates(): any {
    return this.http.get('/api/certificates').toPromise();
  }
}
