import { Component, Input } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputService } from '../services/inpustServices';
import { CommonModule } from '@angular/common';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passInput = '';
  emailInput = '';

  constructor(private router: Router,  private inputServices: InputService) {}

  showData() {
    console.log('Email:', this.emailInput);
    console.log('Password:', this.passInput);
  }

  
  login() {
    const signupBtn = document.getElementById('signup');
    const loginBtn = document.getElementById('login');
    const logoutBtn = document.getElementById('logout');
    const profileBtn = document.getElementById('profileBtn');
    const profileBtnMin = document.getElementById('profileBtnMin');
    const isValid = this.isValid("email")&&this.isValid("pass");
    const userData = localStorage.getItem('user');


    if (userData) { 
      const user = JSON.parse(userData);
      
      
      if (user.email === this.emailInput && user.password === this.passInput && isValid) { 
        signupBtn?.classList.add('hide')
        signupBtn?.classList.remove('show')
        loginBtn?.classList.add('hide')
        loginBtn?.classList.remove('show')
        logoutBtn?.classList.remove('hide')
        logoutBtn?.classList.add('show')
        profileBtn?.classList.add('show')
        profileBtn?.classList.remove('hide')
        profileBtnMin?.classList.add('show')
        profileBtnMin?.classList.remove('hide')
        console.log('Login successful');
        this.router.navigate(['']);
  }
  else {
    alert('Invalid email or password');
    console.log(this.passInput.length);
  }
      
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
