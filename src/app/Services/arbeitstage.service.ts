import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from 'src/api.config';
import { ApiModel } from '../Models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ArbeitstageService {
  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'arbeitstage/';
  }

  createKonfiguration(arbeitstage: ApiModel.Arbeitstage): Observable<ApiModel.Arbeitstage> {
    return this.http.post<ApiModel.Arbeitstage>(`${API_URL}${this.endpoint}`, arbeitstage).pipe(
      tap(_ => console.log('Konfiguration erstellt'))
    );
  }
}