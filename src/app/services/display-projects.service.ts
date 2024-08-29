import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayProjectsService {
  private apiUrlGet = 'http://localhost:3000/Project/getAllProjects';
  private apiUrlDelete = 'http://localhost:3000/Project/deleteProject';
  private apiUrlEdit='http://localhost:3000/Project/editProject';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlGet);
  }

  deleteProject(id: any): Observable<any> {
    console.log(`Attempting to delete project with ID: ${id}`); // Debugging line
    return this.http.delete<any>(`${this.apiUrlDelete}/${id}`);
  }

  editProject(id: any,data:any): Observable<any> {
    console.log(`Attempting to delete project with ID: ${id}`); // Debugging line
    return this.http.patch<any>(`${this.apiUrlEdit}/${id}`,data);
  }
}
