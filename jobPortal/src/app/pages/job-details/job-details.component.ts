import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
   

  activeJobId: number = 0;
  jobObj: any;
  userInfo: any;
  isLoggedIn: boolean = false;
  jobAppllicationObj = {
    "ApplicationId":0,
    "JobId":0,
    "JobSeekerId":0,
    "AppliedDate": new Date(),
    "ApplicationStatus":""
  }
  constructor(private activateRoute: ActivatedRoute, private jobSer: JobService){
    const UserData = localStorage.getItem("jobLoginUser");
    if(UserData == null){
      this.isLoggedIn = false
    }else{
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(UserData);
      this.jobAppllicationObj.JobSeekerId = this.userInfo.JobSeekerId;
    }
    this.activateRoute.params.subscribe((res:any) => {
      debugger;
      this.activeJobId = res.jobId
      this.getJobDetail()
    })
  }
  getJobDetail(){
   this.jobSer.GetJobListingId(this.activeJobId).subscribe((res:any) => {
    this.jobObj = res.data;
    this.jobAppllicationObj.JobId = this.activeJobId;
   })
  }
  apply(){
    return this.jobSer.SendJobApplication(this.jobAppllicationObj).subscribe((res:any) => {
      if(res.result){
        alert("you have been applied successfully")
      }else{
        alert(res.message)
      }
    })
  }
}
