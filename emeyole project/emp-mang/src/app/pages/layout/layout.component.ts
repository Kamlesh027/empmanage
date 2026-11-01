import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Iuser } from 'src/app/core/model/interface/User.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  logindata!:Iuser
  constructor(){
    const Localdata=localStorage.getItem('emp_user')
    if(Localdata!=null){
      this.logindata=JSON.parse(Localdata)
    }
  }
}