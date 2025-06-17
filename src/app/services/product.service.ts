import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://fakestoreapi.com/products'

  constructor(private _http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.url}`);
  }

  public getProductById(id: string | number): Observable<Product> {
    return this._http.get<Product>(`${this.url}/${id}`);
  }
}
