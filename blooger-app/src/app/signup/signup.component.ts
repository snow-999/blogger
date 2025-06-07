import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputService } from '../services/inpustServices';
import { User } from '../models/user.model';
import { userService } from '../services/userServices';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
  
  
export class SignupComponent {
  constructor(private router: Router, private inputServices: InputService, private userServices: userService) {}
  phoneInput = '';
  newUser: User = { userName: '', email: '', password: '', phoneNumber: '' };
  
  

  addUser() {
    const user: User = {
      email: this.newUser.email,
      userName: this.newUser.userName,
      password: this.newUser.password,
      phoneNumber: this.newUser.phoneNumber,
    }
    
    this.userServices.addUser(user).subscribe({
      next(value) {
        console.log('User added successfully')
        localStorage.setItem("userId", String(value.userId))
      },
      error: err => console.error('Error adding user:', err)
    });
  }

  register() {
    const signupBtn = document.getElementById('signup');
    const loginBtn = document.getElementById('login');
    const logoutBtn = document.getElementById('logout');
    const profileBtn = document.getElementById('profileBtn');
    const profileBtnMin = document.getElementById('profileBtnMin');

    
    const isValid = this.isValid("email")&&this.isValid("password")&&this.isValid("phoneNumber")&&this.isValid("userName");
    
    if (isValid) {
      signupBtn?.classList.add('hide')
        loginBtn?.classList.add('hide')
        logoutBtn?.classList.remove('hide')
        logoutBtn?.classList.add('show')
        profileBtn?.classList.add('show')
      profileBtn?.classList.remove('hide')
      profileBtnMin?.classList.add('show')
        profileBtnMin?.classList.remove('hide')
      console.log('sign up successful');
      this.router.navigate(['']);      
      this.addUser()
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

  emailValidation() {
    
  }

  userValidation() {
    
  }

  passValidation() {
    
  }
  phoneValidation() {
    
  }
}
