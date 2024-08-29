import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplaySkillsService {
  private apiUrlGet = 'http://localhost:3000/Skill//getAllSkills';
  private apiUrlDelete = 'http://localhost:3000/Skill/deleteSkill';
  private apiUrlEdit='http://localhost:3000/Skill/editSkill';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlGet);
  }

  deleteSkill(id: any): Observable<any> {
    console.log(`Attempting to delete project with ID: ${id}`); // Debugging line
    return this.http.delete<any>(`${this.apiUrlDelete}/${id}`);
  }

  editSkill(id: any,data:any): Observable<any> {
    console.log(`Attempting to delete project with ID: ${id}`); // Debugging line
    return this.http.patch<any>(`${this.apiUrlEdit}/${id}`,data);
  }
}
