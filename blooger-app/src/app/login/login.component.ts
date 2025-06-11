import { Component, Input } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputService } from '../services/inpustServices';
import { CommonModule } from '@angular/common';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { userService } from '../services/userServices';
import { User } from '../models/user.model';
import { NavService } from '../services/navServices';

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

  constructor(private router: Router,  private inputServices: InputService, private userServices: userService, private navService: NavService) {}

  showData() {
    console.log('Email:', this.emailInput);
    console.log('Password:', this.passInput);
  }

  
   getUserByEmail() {
    this.userServices.getUserByEmail(this.emailInput).
    subscribe((user: User | undefined) => {
      if (user) {
        this.users = user
        console.log('User found:', this.users);
        if (user.userId !== undefined && user.userId !== null) {
          localStorage.setItem('userId', user.userId.toString());
        }
      } else {
        console.log('User not found');
      }
    });
  }
  
  login() {
    const signupBtn = document.getElementById('signup');
    const loginBtn = document.getElementById('login');
    const logoutBtn = document.getElementById('logout');
    const profileBtn = document.getElementById('profileBtn');
    const profileBtnMin = document.getElementById('profileBtnMin');
    this.getUserByEmail()
    
    
    if (this.users.email.length > 10) { 
        this.navService.toggleNavState('showSignup');
        this.navService.toggleNavState('showLogin');
        this.navService.toggleNavState('showLogout');
        this.navService.toggleNavState('showProfile');
        console.log('Login successful');
        this.router.navigate(['']);
    }else {
    alert('Invalid email or password');
    console.log(this.passInput.length);
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
