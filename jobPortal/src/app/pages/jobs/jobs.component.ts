import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {

    jobList: any [] =[]
    constructor(private jobSer: JobService, private router: Router){

    }
    ngOnInit(): void {
      this.loadJobs();
    }

    loadJobs(){
      this.jobSer.GetActiveJobs().subscribe((res:any) => {
        this.jobList = res.data
      })
    }
    openJob(id: number){
      this.router.navigate(["jobDetails",id])
    }
}
