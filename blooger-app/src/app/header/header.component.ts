import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logOut() {
    const signupBtn = document.getElementById('signup');
    const loginBtn = document.getElementById('login');
    const logoutBtn = document.getElementById('logout');
    const profileNav = document.getElementById('profileNav');

    signupBtn?.classList.remove('hide')
    loginBtn?.classList.remove('hide')
    profileNav?.classList.remove('show')
    profileNav?.classList.add('hide')
    logoutBtn?.classList.remove('show')
    logoutBtn?.classList.add('hide')
    console.log('Logout successful'); 
  }
}
