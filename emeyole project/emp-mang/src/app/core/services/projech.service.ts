import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { projectc, projecth } from '../model/interface/User.model';

@Injectable({
  providedIn: 'root'
})
export class ProjechService {
 http=inject(HttpClient);

 getAllproject():Observable<projecth[]>{
  return this.http.get<projecth[]>(environment.API_URL+'/GetAllProjects');
 }
 createProject(obj:projectc):Observable<projectc>{
  return this.http.post<projectc>(environment.API_URL+'/CreateProject',obj);
 }
}
