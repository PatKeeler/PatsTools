import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('Whats up');
  }
}
