import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProjectService {

  private apiUrlAdd = 'http://localhost:3000/Project/createProject';

  constructor(private http: HttpClient) {}

  addProject(title: string, description: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('projectImg', image);

    return this.http.post<any>(this.apiUrlAdd, formData);
  }

  

  
}
