import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/Contact/handle'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  sendContactForm(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
