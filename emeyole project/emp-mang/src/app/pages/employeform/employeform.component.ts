import { AnimateTimings } from '@angular/animations';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { emplmodel } from 'src/app/core/model/classes/emp-form.model';
import { childID, parentID, respModel } from 'src/app/core/model/interface/User.model';
import { EmpformService } from 'src/app/core/services/empform.service';
import { MasterSService } from 'src/app/core/services/master-s.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employeform',
  imports:[FormsModule,NgFor],
  standalone:true,
  templateUrl: './employeform.component.html',
  styleUrls: ['./employeform.component.css']
})
export class EmployeformComponent implements OnInit {
empobj:emplmodel=new emplmodel();

empinje=inject(EmpformService);
master=inject(MasterSService)
activeR=inject(ActivatedRoute);

childdepList: WritableSignal<childID[]>=signal([])
onChange(event:number){
  const id=event
    if (typeof id !== 'number') return;
console.log('id received:', id, typeof id);
  this.master.getAllchild(id).subscribe({

    next:(res3:respModel)=>{
    this.childdepList.set(res3.data);
    }
  })
}

eidId:number=0;
parentdepList: WritableSignal<parentID[]>=signal([])
ngOnInit(): void {
 this.getparent();
 this.activeR.params.subscribe({
    next:(res4:any)=>{
      this.eidId=res4.id;
      if(this.eidId!=0){
     this.gellempbyID();
      }
    }
 })
}
   gellempbyID(){
    this.empinje.getAllemplbyID(this.eidId).subscribe({
     next:(res5:emplmodel)=>{
      this.empobj=res5;
     }
    })
   }

getparent(){
 this.master.getAllParent().subscribe({
  next:(res2:respModel)=>{
    this.parentdepList.set(res2.data)
  }
 })
}
onsaveemp(){
  this.empinje.oncreateemp(this.empobj).subscribe({
    next:(res1:emplmodel)=>{
     alert("Emp created succesfukky")
    },
    error: (err: any) => {
      
    }
  })

  
}

}
