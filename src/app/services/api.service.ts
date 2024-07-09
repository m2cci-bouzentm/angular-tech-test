import { Injectable } from '@angular/core';
import { ReferenceAnalysis, UsureAnalysis } from '../../types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: UsureAnalysis | ReferenceAnalysis): Observable<T> {
    return this.http.post<T>(url, body);
  }
}
