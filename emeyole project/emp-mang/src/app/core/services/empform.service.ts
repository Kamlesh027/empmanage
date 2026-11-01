import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { emplmodel } from '../model/classes/emp-form.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpformService {

  
http=inject(HttpClient);
constructor(){

}

getAllempl():Observable<emplmodel[]>{
  return this.http.get<emplmodel[]>(environment.API_URL+"/GetAllEmployees")
}
getAllemplbyID(id:number):Observable<emplmodel>{
  return this.http.get<emplmodel>(environment.API_URL+"/GetEmployee/"+id)
}
  oncreateemp(obj:emplmodel):Observable<emplmodel>{
    return this.http.post<emplmodel>(environment.API_URL+"/CreateEmployee",obj)
  }
}
