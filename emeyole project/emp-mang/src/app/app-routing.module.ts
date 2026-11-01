import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { EmployeformComponent } from './pages/employeform/employeform.component';
import { ProjectAssComponent } from './pages/project-ass/project-ass.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  {
   path:'',
   redirectTo:'login',
   pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,

  },
  {
    path:'admin',
    component:LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'employe-list',
        component:EmpListComponent
      },
      {
        path:'emp-form/:id',
        component:EmployeformComponent
      },
      {
        path:'project',
        component:ProjectComponent
      },
      {
        path:'project-ass',
        component:ProjectAssComponent
      },
      

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
