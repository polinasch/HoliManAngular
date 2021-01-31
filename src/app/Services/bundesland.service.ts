import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from 'src/api.config';
import { ApiModel } from '../Models/api.model';

@Injectable({
  providedIn: 'root'
})
export class BundeslandService {
  endpoint: string;
  constructor(private http: HttpClient) {
    this.endpoint = 'bundesland/';
   }

  getBundeslaender(): Observable<ApiModel.Bundesland[]> {
    return this.http.get<ApiModel.Bundesland[]>(`${API_URL}${this.endpoint}`).pipe(
      tap(_ => console.log('Bundesländer geladen'))
  );
  }
}