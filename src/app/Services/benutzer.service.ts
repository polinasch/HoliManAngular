import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiModel } from '../Models/api.model';
import { tap } from 'rxjs/operators';
import { API_URL } from 'src/api.config';

@Injectable({
  providedIn: 'root'
})
export class BenutzerService {
  endpoint: string;
  
  constructor(private http: HttpClient) {
    this.endpoint = 'benutzer/';
   }

   getBenutzer(): Observable<ApiModel.Benutzer[]> {
    return this.http.get<ApiModel.Benutzer[]>(`${API_URL}${this.endpoint}`).pipe(
      tap(_ => console.log('Benutzer geladen'))
    );
  }

  getBenutzerById(id: number): Observable<ApiModel.Benutzer> {
    return this.http.get<ApiModel.Benutzer>(`${API_URL}${this.endpoint}${id}`).pipe(
      tap(_ => console.log('Benutzer nach ID'))
    );
  }

  getVorgesetzten(): Observable<ApiModel.Benutzer[]> {
    return this.http.get<ApiModel.Benutzer[]>(`${API_URL}${this.endpoint}vorgesetzter?istVorgesetzter=true`).pipe(
      tap(_ => console.log('Benutzer geladen'))
  );
  }

  updateBenutzer(benutzer: ApiModel.Benutzer): Observable<ApiModel.Benutzer> {
    return this.http.put(`${API_URL}${this.endpoint}${benutzer.BenutzerID}`, benutzer).pipe(
      tap(_ => console.log('Benutzer aktualisiert'))
    );
  }

  createBenutzer(benutzer: ApiModel.Benutzer): Observable<ApiModel.Benutzer> {
    return this.http.post<ApiModel.Benutzer>(`${API_URL}${this.endpoint}`, benutzer).pipe(
      tap(_ => console.log('Benutzer erstellt'))
    );
  }

  deleteBenutzer(id: number): Observable<ApiModel.Benutzer> {
    return this.http.delete(`${API_URL}${this.endpoint}${id}`).pipe(
      tap(_ => console.log('Benutzer gelöscht'))
    );
  }
}