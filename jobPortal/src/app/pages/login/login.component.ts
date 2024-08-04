import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any  = {
      "UserName": "",
      "Password": ""
  }
  constructor(private jobSer: JobService, private router: Router) {
    
  } 
  onLogin(){
  this.jobSer.login(this.loginObj).subscribe((res:any)=>{
    if(res.result){
      alert("user logged in")
      localStorage.setItem("JobLoginUser",JSON.stringify(res.data));
      this.router.navigateByUrl("/home")
    }else{
      alert(res.message)
    }
  })
  }
}
