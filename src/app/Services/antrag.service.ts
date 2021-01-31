import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from 'src/api.config';
import { ApiModel } from '../Models/api.model';

@Injectable({
  providedIn: 'root'
})
export class AntragService {
  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'urlaubsantrag/';
   }

   getAntraege(): Observable<ApiModel.Urlaubsantrag[]> {
    return this.http.get<ApiModel.Urlaubsantrag[]>(`${API_URL}${this.endpoint}`).pipe(
      tap(_ => console.log('Urlaubsanträge geladen'))
    );
  }

  getAntragById(id: number): Observable<ApiModel.Urlaubsantrag> {
    return this.http.get<ApiModel.Urlaubsantrag>(`${API_URL}${this.endpoint}${id}`).pipe(
      tap(_ => console.log('Antrag nach ID'))
    );
  }

  getAntraegeByBenutzer(id: number): Observable<ApiModel.Urlaubsantrag[]> {
    return this.http.get<ApiModel.Urlaubsantrag[]>(`${API_URL}${this.endpoint}benutzer/${id}`).pipe(
      tap(_ => console.log('Antrag nach BenutzerID'))
    );
  }

  updateAntrag(antrag: ApiModel.Urlaubsantrag): Observable<ApiModel.Urlaubsantrag> {
    return this.http.put(`${API_URL}${this.endpoint}${antrag.AntragID}`, antrag).pipe(
      tap(_ => console.log('Antrag aktualisiert'))
    );
  }

  createAntrag(antrag: ApiModel.Urlaubsantrag): Observable<ApiModel.Urlaubsantrag> {
    return this.http.post<ApiModel.Urlaubsantrag>(`${API_URL}${this.endpoint}`, antrag).pipe(
      tap(_ => console.log('Antrag erstellt'))
    );
  }

  deleteAntrag(id: number): Observable<ApiModel.Urlaubsantrag> {
    return this.http.delete(`${API_URL}${this.endpoint}${id}`).pipe(
      tap(_ => console.log('Antrag gelöscht'))
    );
  }
}