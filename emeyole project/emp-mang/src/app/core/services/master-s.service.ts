import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { respModel } from '../model/interface/User.model';

@Injectable({
  providedIn: 'root'
})
export class MasterSService {

  http=inject(HttpClient)

  getAllParent():Observable<respModel>   {
    return this.http.get<respModel> (environment.API_URL+"/GetParentDepartment")
  }
  
  getAllchild(id:number):Observable<respModel>{
    return this.http.get<respModel> (environment.API_URL+"/GetChildDepartmentByParentId?deptId="+id)
  }
}
