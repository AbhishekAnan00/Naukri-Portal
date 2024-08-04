import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isLoggedIn: boolean = false;
  userInfo: any;
  constructor(){
    const UserData = localStorage.getItem("JobLoginUser");
    if(UserData == null){
      this.isLoggedIn= false
    }else{
      this.isLoggedIn= true
      this.userInfo = JSON.parse(UserData)
    }
  }
  logout(){
    localStorage.removeItem("JobLoginUser");
    this.isLoggedIn = false
  }
}
