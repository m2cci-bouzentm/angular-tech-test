import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { UsureAnalysis } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class UsureService {
  constructor(private apiService: ApiService) {}

  get(url?: string): Observable<UsureAnalysis[]> {
    return this.apiService.get<UsureAnalysis[]>(url || 'api/usureAnalysis');
  }

  post(body: UsureAnalysis, url?: string): Observable<UsureAnalysis[]> {
    return this.apiService.post<UsureAnalysis[]>(
      url || 'api/usureAnalysis',
      body
    );
  }
}
