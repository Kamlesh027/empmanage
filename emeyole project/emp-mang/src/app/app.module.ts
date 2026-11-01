import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MasterComponent } from './pages/master/master.component';
import { EmployeformComponent } from './pages/employeform/employeform.component';
import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectAssComponent } from './pages/project-ass/project-ass.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
    
    MasterComponent,

  
    
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    LayoutComponent,
    HttpClientModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
