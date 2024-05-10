import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersServices {

  private readonly usuarioAPIUrl = `https://fakestoreapi.com/`;


  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {

    return this.http.get(this.usuarioAPIUrl + `users`);
  }

  login(credentials: {}): Observable<any>{
    
    return this.http.post(this.usuarioAPIUrl + 'auth/login', credentials);
  }


  updateuser(idUser: number,datauser:any): Observable<any>{    
   
    return this.http.patch(this.usuarioAPIUrl + `users/${idUser}`, datauser);
  }

}
