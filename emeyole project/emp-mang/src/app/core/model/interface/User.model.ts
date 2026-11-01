export interface Iuser {
  employeeId: number
  employeeName: string
  contactNo: string
  emailId: string
  deptId: number
  password: string
  gender: string
  role: string
  createdDate: string
}
export interface respModel{
   message:string
  result: boolean,
  data:any
}
export interface parentID{
   departmentId: number,
   departmentName: string,
   departmentLogo: string
}
export interface childID{
     childDeptId: number,
      parentDeptId: number,
      departmentName: string,
}
export interface projecth {
  projectId: number
  projectName: string
  clientName: string
  startDate: string
  leadByEmpId: number
  contactPerson: string
  contactNo: string
  emailId: string
  employeeName: string
}
export interface projectc {
  projectId: number
  projectName: string
  clientName: string
  startDate: string
  leadByEmpId: number
  contactPerson: string
  contactNo: string
  emailId: string
}
export interface myproject extends projectc{
    employeeName:string
}