import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  
  apiEmpPoint: String = "https://freeapi.miniprojectideas.com/api/JobPortal/";

  constructor(private http: HttpClient) { }

  registerEmployee(obj: any){
    return this.http.post(this.apiEmpPoint + "AddNewEmployer",obj)
  }
  registerAsJobSeeker(obj: any){
    return this.http.post(this.apiEmpPoint + "AddNewJobSeeker",obj)
  }
  login(obj:any){
    return this.http.post(this.apiEmpPoint + "Login",obj)
  }
  jobCategory(){
    return this.http.get(this.apiEmpPoint + "GetAllJobCategory")
  }
  createNewJob(obj:any){
    return this.http.post(this.apiEmpPoint + "CreateNewJobListing",obj)
  }
  GetActiveJobs(){
    return  this.http.get(this.apiEmpPoint + "GetActiveJobListing")
  }
  GetJobListingId(jobId: number){
    return  this.http.get(this.apiEmpPoint + "GetJobListingById?JobId=" + jobId)
  }
  SendJobApplication(obj:any){
    return  this.http.get(this.apiEmpPoint + "SendJobApplication",obj)
  }
}
