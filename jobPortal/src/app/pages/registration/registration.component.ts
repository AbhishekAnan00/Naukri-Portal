import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { JobService } from '../../service/job.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  
  employeeObj : any = {
    "EmployerId": 0,
    "CompanyName": "",
    "EmailId": "",
    "MobileNo": "",
    "PhoneNo": "",
    "CompanyAddress": "",
    "City": "",
    "State": "",
    "PinCode": "",
    "LogoURL": "",
    "GstNo": ""
  }
  fresherObj : any = {
    "JobSeekerId": 0,
    "FullName": "",
    "EmailId": "",
    "MobileNo": "",
    "ExperienceStatus": "",
    "ResumeUrl": "",
    "JobSeekerSkills":[],
    "JobSeekerWorkExperiences":[]

  }
  isJobSeeker:boolean = true;
  
  constructor(private job:JobService){}


  register(){
    this.job.registerEmployee(this.employeeObj).subscribe((res:any)=>{
       if(res.result){
         alert(res.message)
       }else{
        alert(res.message)
       }
    })
  }

  registerAsJobSeeker(){
    this.job.registerAsJobSeeker(this.fresherObj).subscribe((res:any)=>{
       if(res.result){
         alert(res.message)
       }else{
        alert(res.message)
       }
    })
  }
}
