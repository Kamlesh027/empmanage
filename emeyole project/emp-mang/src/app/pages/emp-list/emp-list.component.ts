import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { emplmodel } from 'src/app/core/model/classes/emp-form.model';
import { EmpformService } from 'src/app/core/services/empform.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterLink],
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {

  empolylist$: Observable<emplmodel[]>=new Observable<emplmodel[]>;
  empServ=inject(EmpformService);


  constructor(){
   this.empolylist$=this.empServ.getAllempl();
  }
}
