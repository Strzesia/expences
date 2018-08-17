import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Expence } from '../models/expence';

@Injectable()
export class ExpencesService {

  private apiUrl = "https://expences-api.herokuapp.com/expences";

  constructor(private http: HttpClient) { }

  getExpences(): Observable<Expence[]> {
    return this.http.get(
      this.apiUrl
    ) as Observable<Expence[]>;
  }

  getExpence(id: number): Observable<Expence> {
    return this.http.get(
      this.apiUrl + `/${id}`
    ) as Observable<Expence>;
  }

  addExpence(data): Observable<Expence> {
    return this.http.post(
      this.apiUrl, data
    ) as Observable<Expence>;
  }

  editExpence(id: number, data): Observable<Expence> {
    return this.http.put(
      this.apiUrl + `/${id}`, data
    ) as Observable<Expence>;
  }

  deleteExpence(id: number): Observable<Expence> {
    return this.http.delete(
      this.apiUrl + `/${id}`
    ) as Observable<Expence>;
  }

  getExpencesByDay(day: String): Observable<Expence[]> {
    return this.http.get(
      this.apiUrl + `/day/${day}`
    ) as Observable<Expence[]>;
  }
  
  getExpencesByDays(dateFrom: String, dateTo: String): Observable<Expence[]> {
    return this.http.get(
      this.apiUrl + `/days/${dateFrom}/${dateTo}`
    ) as Observable<Expence[]>;
  }  
  
  getExpencesByDayAndCategory(day: String, categoryId: number): Observable<Expence[]> {
    return this.http.get(
      this.apiUrl + `/category/${categoryId}/day/${day}`
    ) as Observable<Expence[]>;
  }
  
  getExpencesByDaysAndCategory(dateFrom: String, dateTo: String, categoryId: number): Observable<Expence[]> {
    return this.http.get(
      this.apiUrl + `/category/${categoryId}/days/${dateFrom}/${dateTo}`
    ) as Observable<Expence[]>;
  }

  getExpencesByCategory(categoryId): Observable<Expence[]> {
    return this.http.get(
      this.apiUrl + `/category/${categoryId}`
    ) as Observable<Expence[]>;
  }

}
