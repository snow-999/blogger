import { Component, Input } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passInput = '';
  emailInput = '';

  constructor(private router: Router) {}

  showData() {
    console.log('Email:', this.emailInput);
    console.log('Password:', this.passInput);
  }

  login() {
    const signupBtn = document.getElementById('signup');
    const loginBtn = document.getElementById('login');
    const logoutBtn = document.getElementById('logout');
    const profileNav = document.getElementById('profileNav');
    
    
    if (this.passInput.length > 8 && this.emailInput.includes('@example.com')) {
      signupBtn?.classList.add('hide')
      loginBtn?.classList.add('hide')
      logoutBtn?.classList.remove('hide')
      profileNav?.classList.remove('hide')
      profileNav?.classList.add('show')
      logoutBtn?.classList.add('show')
      
      console.log('Login successful');
      this.router.navigate(['/home']);

    }
  }
  
}
