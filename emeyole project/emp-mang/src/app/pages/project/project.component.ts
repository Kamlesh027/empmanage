import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { myproject, projectc } from 'src/app/core/model/interface/User.model';
import { ProjechService } from 'src/app/core/services/projech.service';

@Component({
  selector: 'app-project',
  imports:[CommonModule, ReactiveFormsModule],
  standalone:true,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
   projectform!:FormGroup;
   porjectSrv=inject(ProjechService);
   projectList=signal<myproject[]>([])
   isboolen:boolean=false;
   constructor(){
    this.intlizforms();
   }

   ngOnInit(): void {
     this.loadproject();
   }
    loadproject(){
      this.porjectSrv.getAllproject().subscribe({
        next:(res6:myproject[])=>{
         this.projectList.set(res6);
        },
        error:()=>{
         alert('Unable to load projects. Please try again.');
        }
      })
    }

   intlizforms(){
    this.projectform= new FormGroup({
     
     projectId: new FormControl(0),
    projectName: new FormControl('', Validators.required),
    clientName: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    leadByEmpId: new FormControl(0, [Validators.required, Validators.min(1)]),
    contactPerson: new FormControl('', Validators.required),
    contactNo: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    employeeName: new FormControl(''),
    })
   }
   showpannel(){
   this.isboolen=true;
   }
   hidepannel(){
    this.isboolen=false;
   }
     saveproject(){
      const formvalue:projectc=this.projectform.value;
      this.porjectSrv.createProject(formvalue).subscribe({
        next:(Response:projectc)=>{
         alert("project creadted suuc")
         this.loadproject();
        }
      });
     }
}
