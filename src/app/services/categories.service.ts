import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Category } from '../models/category';

@Injectable()
export class CategoriesService {

  private apiUrl = "https://expences-api.herokuapp.com/categories";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get(
      this.apiUrl
    ) as Observable<Category[]>;
  }

  getCategory(id: number) : Observable<Category> {
    return this.http.get(
      this.apiUrl + `/${id}`
    ) as Observable<Category>;
  }

  addCategory(name) : Observable<Category> {
    return this.http.post(
      this.apiUrl, name
    ) as Observable<Category>;
  }

  editCategory(id : number, name) : Observable<Category> {
    return this.http.put(
      this.apiUrl + `/${id}`, name
    ) as Observable<Category>;
  }

  deleteCategory(id: number) : Observable<Category> {
    return this.http.delete(
      this.apiUrl + `/${id}`
    ) as Observable<Category>;
  }
  
}
