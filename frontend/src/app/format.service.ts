import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FormatService {

  apiUrl = 'http://localhost/PatsTools/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getSql(parameters: HttpParams): Observable<any> {
    const API_URL = `${this.apiUrl}/formatSql`;
    console.log('SQL_URL: ' + API_URL);
    console.log('SQL Params: ' + parameters.toString());
    return this.http.post(API_URL, parameters);
  }

  getXml(parameters: HttpParams): Observable<any> {
    const API_URL = `${this.apiUrl}/formatXml`;
    console.log('XML_URL: ' + API_URL);
    console.log('XML Params: ' + parameters.toString());
    return this.http.post(API_URL, parameters);
  }
}
