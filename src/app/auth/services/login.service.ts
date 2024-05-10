import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly usuarioAPIUrl = `https://fakestoreapi.com/`;


  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {

    return this.http.get(this.usuarioAPIUrl + `users`);
  }

  login(credentials: {}): Observable<any>{
    
    return this.http.post(this.usuarioAPIUrl + 'auth/login', credentials);
  }


  // login(userEmail:any): Observable<any>{    
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post(this.usuarioAPIUrl + 'usuarios/login', userEmail, { headers });
  // }

  // getRolesUsuario(idUsuario:any): Observable<any>{    
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.get(this.usuarioAPIUrl + `UsuarioRol/${encodeURIComponent(idUsuario)}`, { headers });
  // }

  // getIndicadoresUsuario(idUsuario:any): Observable<any>{    
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.get(this.usuarioAPIUrl + `UsuarioIndicador/${encodeURIComponent(idUsuario)}`, { headers });
  // }

}
