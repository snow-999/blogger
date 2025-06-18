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
  passInput = '';
  emailInput = '';
  users: User = {
    userName: '',
    email: '',
    password: '',
    phoneNumber: ''
  };

  constructor(private router: Router,  private inputServices: InputService,  private navService: NavService, private userService: UserService) {}

  showData() {
    console.log('Email:', this.emailInput);
    console.log('Password:', this.passInput);
  }

  
  
  
  login() {
  
    if (true) { 
        // this.userService.createUser(this.users)
        this.navService.toggleNavState('showSignup');
        this.navService.toggleNavState('showLogin');
        this.navService.toggleNavState('showLogout');
        this.navService.toggleNavState('showProfile');
        console.log('Login successful');
        this.router.navigate(['']);
    } else {
        alert('Invalid email or password');
      }
      
    }


  isValid(fieldName:string) {
    switch (fieldName) {
      case "pass": { 
        if (this.passInput.length > 8) {
          this.inputServices.setInput('password', this.passInput);
          return true;
        } else {
            return false;
        }
      }
      case "email": {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@example\.com$/;
        if (emailPattern.test(this.emailInput)) {
          this.inputServices.setInput('email', this.emailInput);
      return true;
    } else {
      
        return false;
    }
        }
        default: {return false}
    }
    
  }
  
}
