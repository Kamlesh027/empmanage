export class emplmodel {
  employeeId: number
  employeeName: string
  contactNo: string
  emailId: string
  deptId: number
  password: string
  gender: string
  role: string
  createdDate: Date

  constructor(){
   this.contactNo='';
   this.createdDate=new Date();
   this.emailId='';
   this.deptId=0;
   this.employeeId=0;
   this.employeeName='';
   this.password='';
   this.gender='';
   this.role='';
  }
}


