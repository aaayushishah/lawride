import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  prefix = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  /**
   * sendEmail
   */
  public sendEmail(payload): Observable<any> {
    console.log("ayushi serice");
    return this.httpClient.post<any>(`${this.prefix}/send`, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }
}
