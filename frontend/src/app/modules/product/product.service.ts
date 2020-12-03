import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Product } from '../../core/models/product';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { SnackMessageService } from 'src/app/shared/services/snackMessage.service';

@Injectable({
  providedIn: 'any'
})
export class ProductService {

  constructor(private _http: HttpClient,
    private _snack: SnackMessageService
  ) { }

  public create(product: Product): Observable<Product> {
    return this._http.post<Product>(`${environment.baseUrl}/products`, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  public read(): Observable<Product[]> {
    return this._http.get<Product[]>(`${environment.baseUrl}/products`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  public readById(id: number): Observable<Product> {
    return this._http.get<Product>(`${environment.baseUrl}/products/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  public update(product: Product): Observable<Product> {
    return this._http.put<Product>(`${environment.baseUrl}/products/${product.id}`, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  public delete(id: number): Observable<Product> {
    return this._http.delete<Product>(`${environment.baseUrl}/products/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this._snack.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
