import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class JavaService {

  apiUrl = '/PatsTools/api';

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');


  constructor(public http: HttpClient) { }

  getIcmPayouts(parameters: HttpParams): Observable<any> {
    const API_URL = `${this.apiUrl}/getIcmPayouts`;
    return this.http.post(API_URL, parameters);
  }
}
