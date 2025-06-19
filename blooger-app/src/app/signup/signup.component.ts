import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputService } from '../services/inpustServices';
import { User } from '../models/user.model';
import { NavService } from '../services/navServices';
import { UserService } from '../services/userServices';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
  
  
export class SignupComponent {
  constructor(private router: Router, private inputServices: InputService, private navService: NavService, private userService: UserService) {}
  phoneInput = '';
  newUser: User = { userName: '', email: '', password: '', phoneNumber: '' };
  
  

  createUser(){
    const user: User = {
      email: this.newUser.email,
      userName: this.newUser.userName,
      password: this.newUser.password,
      phoneNumber: this.newUser.phoneNumber,
    }
    this.userService.createUser(user)
  }



  register() {
    const isValid = this.isValid("email")&&this.isValid("password")&&this.isValid("phoneNumber")&&this.isValid("userName");
    
    if (isValid) {
      this.createUser()
      this.navService.toggleNavState('showSignup');
      this.navService.toggleNavState('showLogin');
      this.navService.toggleNavState('showLogout');
      this.navService.toggleNavState('showProfile');
      console.log('sign up successful');
      this.router.navigate(['']);      
    } else {
      alert('Please fill in all fields correctly');
    }
  }

  isValid(fieldName:string) {
    switch (fieldName) {
      case "email": { 
        const emailPattern = /^[a-zA-Z0-9._%+-]+@example\.com$/;
      if (emailPattern.test(this.newUser.email)) {
        this.inputServices.setInput('email', this.newUser.email);
        return true;
      } else {
        return false;
    }
      }
      case "password": {
        if (this.newUser.password.length > 8) {
          this.inputServices.setInput('password', this.newUser.password);
          return true;
        } else {
          alert('Please enter a valid password');
          return false;
        }
       }
      case "phoneNumber": { 
        const phonePattern = /^\d{10}$/;
    if (phonePattern.test(this.newUser.phoneNumber)) {
      this.inputServices.setInput('phoneNumber', this.newUser.phoneNumber);
      return true;
    } else {
      alert('Please enter a valid phone number');
      return false;
    }
      }
      case "userName": {
        if (this.newUser.userName.length > 3) {
          this.inputServices.setInput('userName', this.newUser.userName);
          return true;
        } else {
          alert('Please enter a valid username');
          return false;
        }
      }
        default :{return false}
      
    }
  }
}
