import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputService } from '../services/inpustServices';
import { CommonModule } from '@angular/common';

import { User } from '../models/user.model';
import { NavService } from '../services/navServices';
import { UserService } from '../services/userServices';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: any = {
    userName: '',
    password: '',
  };

  constructor(private router: Router,  private inputServices: InputService,  private navService: NavService, private userService: UserService) {}

  showData() {
    console.log('userName:', this.user["userName"]);
    console.log('Password:', this.user["password"]);
  }

  
getUser() {
  console.log("============");
  this.userService.getUser(this.user).subscribe({
    next: (data) => {
      console.log("User data:", data); // You get the data here
    },
    error: (err) => {
      console.error("Error fetching user:", err);
    }
  });
  console.log("============");
}
  
 login() {
    const logUser = this.userService.getUser(this.user);
    console.log("22222222222222222");
    console.log(logUser.subscribe(res => {
      console.log(res);
      
    }));
    
    const isValid = this.isValid("userName")&&this.isValid("password")
    if (isValid && logUser != undefined) { 
      console.log("33333333333333333333");
      
      console.log(logUser);
      
        this.navService.toggleNavState('showSignup');
        this.navService.toggleNavState('showLogin');
        this.navService.toggleNavState('showLogout');
        this.navService.toggleNavState('showProfile');
        console.log('Login successful');
        this.router.navigate(['home']);
    } else {
        alert('Invalid email or password');
      }
    }


  isValid(fieldName:string) {
    switch (fieldName) {
      case "password": { 
        if (this.user["password"].length > 8) {
          this.inputServices.setInput('password', this.user["password"]);
          return true;
        } else {
            return false;
        }
      }
      case "userName": {
        if (this.user["userName"].length > 3) {
          this.inputServices.setInput('userName', this.user.userName);
          return true;
        } else {
          console.log();
          ('Please enter a valid username');
          return false;
        }
      }
        default: {return false}
    }
    
  }
  
}
