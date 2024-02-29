import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProduct(): Observable<Product> {
    const productUrl = 'http://localhost:3000/product';
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  getCategories(): Observable<Category> {
    const CategoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(CategoriesUrl);
  }

  createProduct(productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product';
    return this.httpClient.post<Product>(productUrl, productBody); // return an observable
  }

  viewProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.get<Product>(productUrl);
  }

  updateProduct(productId: any, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }

  deleteProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.delete<Product>(productUrl);
  }

  searchCategoryProduct(categoryId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/category=' + categoryId;
    return this.httpClient.get<Product>(productUrl);
  }

  searchDateProduct(dateParam: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/date=' + dateParam;
    return this.httpClient.get<Product>(productUrl);
  }
}
