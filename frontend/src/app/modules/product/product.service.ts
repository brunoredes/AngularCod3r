import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  public create(product: Product): Observable<Product> {
    return this._http.post<Product>(`${environment.baseUrl}/products`, product);
  }

  public read(): Observable<Product[]> {
    return this._http.get<Product[]>(`${environment.baseUrl}/products`);
  }

  public readById(id: number): Observable<Product> {
    return this._http.get<Product>(`${environment.baseUrl}/products/${id}`);
  }

  public update(product: Product): Observable<Product> {
    return this._http.put<Product>(`${environment.baseUrl}/products/${product.id}`, product);
  }

  public delete(id: number): Observable<Product> {
    return this._http.delete<Product>(`${environment.baseUrl}/products/${id}`);
  }
}
