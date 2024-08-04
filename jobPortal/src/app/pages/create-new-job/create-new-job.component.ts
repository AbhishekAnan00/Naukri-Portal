import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-create-new-job',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-new-job.component.html',
  styleUrl: './create-new-job.component.css'
})
export class CreateNewJobComponent implements OnInit {
   createNewJobObj:any = {
  "JobId": 0,
  "JobName": "",
  "CreatedDate": new Date(),
  "EmployerId": 0,
  "CategoryId": 0,
  "Experience": "",
  "Package": "",
  "Location": "",
  "JobDescription": "",
  "IsActive": true
   };
   categoriesList: any [] = []
   constructor(private jobSer: JobService){
     const UserData = localStorage.getItem("jobLoginUser");
     if(UserData != null){
        const data = JSON.parse(UserData);
        this.createNewJobObj.EmployerId = data.employerId;
     }
   }
   ngOnInit(): void {
     this.jobCategory();
   }
   jobCategory(){
    this.jobSer.jobCategory().subscribe((res:any)=>{
      this.categoriesList = res.data
    })
   }
   createJob(obj:any){
    this.jobSer.createNewJob(this.createNewJobObj).subscribe((res:any) => {
      if(res.result){
         alert("post created")
      }else {
        alert(res.message)
      }
    })
   }
}
