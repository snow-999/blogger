import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router) {}
  passInput = '';
  emailInput = '';
  userInput = '';
  phoneInput = '';
  
  register() {
    if (this.passInput.length > 8 && this.emailInput.includes('@example.com')) {
      console.log('sign up successful');
      this.router.navigate(['/home']);
    }
  }
}
