import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsServices {

  private readonly usuarioAPIUrl = `https://fakestoreapi.com/`;


  constructor(private http: HttpClient) { }

  getproducts(): Observable<any> {

    return this.http.get(this.usuarioAPIUrl + `products`);
  } 

}
