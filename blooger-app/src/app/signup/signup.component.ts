import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputService } from '../services/inpustServices';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router, private inputServices: InputService) {}
  passInput = '';
  emailInput = '';
  userInput = '';
  phoneInput = '';
  
  public index = 0;

  register() {
    const signupBtn = document.getElementById('signup');
    const loginBtn = document.getElementById('login');
    const logoutBtn = document.getElementById('logout');
    const profileBtn = document.getElementById('profileBtn');

    const isEmailValid = this.emailValidation();
    const isUserValid = this.userValidation();
    const isPassValid = this.passValidation();
    const isPhoneValid = this.phoneValidation();
    
    if (isEmailValid && isUserValid && isPassValid && isPhoneValid) {
      signupBtn?.classList.add('hide')
        loginBtn?.classList.add('hide')
        logoutBtn?.classList.remove('hide')
      logoutBtn?.classList.add('show')
      profileBtn?.classList.add('show')
        profileBtn?.classList.remove('hide')
      console.log('sign up successful');
      this.router.navigate(['']);

      const user = {
        email: this.emailInput,
        userName: this.userInput,
        password: this.passInput,
        phoneNumber: this.phoneInput,
        userId: this.index++
      }
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      alert('Please fill in all fields correctly');
    }
  }

  emailValidation() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@example\.com$/;
    if (emailPattern.test(this.emailInput)) {
      this.inputServices.setInput('email', this.emailInput);

      return true;
    } else {
      alert('Please enter a valid email address');
      return false;
    }
  }

  userValidation() {
    if (this.userInput.length > 3) {
      this.inputServices.setInput('userName', this.userInput);
      return true;
    } else {
      alert('Please enter a valid username');
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
  phoneValidation() {
    const phonePattern = /^\d{10}$/;
    if (phonePattern.test(this.phoneInput)) {
      this.inputServices.setInput('phoneNumber', this.phoneInput);
      return true;
    } else {
      alert('Please enter a valid phone number');
      return false;
    }
  }

  

}
