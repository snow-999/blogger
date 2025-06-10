import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  showMiniMenu = false;
  showProfile = false;
  showSignup = false;
  showLogin = false;
  logOut() {
    const signupBtn = document.getElementById('signup');
    const loginBtn = document.getElementById('login');
    const logoutBtn = document.getElementById('logout');
    const profileNav = document.getElementById('profileBtn');
    const profileBtnMin = document.getElementById('profileBtnMin');

    signupBtn?.classList.remove('hide')
    loginBtn?.classList.remove('hide')
    profileNav?.classList.remove('show')
    profileNav?.classList.add('hide')
    logoutBtn?.classList.remove('show')
    logoutBtn?.classList.add('hide')
    profileBtnMin?.classList.remove('show')
    profileBtnMin?.classList.add('hide')
    console.log('Logout successful'); 
    this.router.navigate(['']);
    localStorage.removeItem('userId');
  }

  showMiniNav() { 
    if (this.showMiniMenu) {
      this.showMiniMenu = false;
    } else {
      this.showMiniMenu = true;
    }
  }
}
