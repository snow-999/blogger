import { Component, Input } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputService } from '../services/inpustServices';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
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
    const profileNav = document.getElementById('profileNav');
    const isEmailValid = this.validationEmail();
    const isPassValid = this.passValidation();
    
    
    if (isEmailValid && isPassValid) {
      signupBtn?.classList.add('hide')
      loginBtn?.classList.add('hide')
      logoutBtn?.classList.remove('hide')
      profileNav?.classList.remove('hide')
      profileNav?.classList.add('show')
      logoutBtn?.classList.add('show')
      console.log('Login successful');
      this.router.navigate(['']);
    }
    else {
      alert('Please fill in all fields correctly');
    }
  }

  validationEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@example\.com$/;
    if (emailPattern.test(this.emailInput)) {
      this.inputServices.setInput('email', this.emailInput);
      return true;
    } else {
      alert('Please enter a valid email address');
      return false;
    }
  }

  passValidation() {
    if (this.passInput.length > 8) {
      this.inputServices.setInput('password', this.passInput);
      return true;
    } else {
      alert('Please enter a valid password');
      return false;
    }
  }
  
}
