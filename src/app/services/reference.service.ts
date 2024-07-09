import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ReferenceAnalysis } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ReferenceService {
  constructor(private apiService: ApiService) {}

  get(url?: string): Observable<ReferenceAnalysis[]> {
    return this.apiService.get<ReferenceAnalysis[]>(
      url || 'api/referenceAnalysis'
    );
  }

  post(body: ReferenceAnalysis, url?: string): Observable<ReferenceAnalysis[]> {
    return this.apiService.post<ReferenceAnalysis[]>(
      url || 'api/referenceAnalysis',
      body
    );
  }
}
