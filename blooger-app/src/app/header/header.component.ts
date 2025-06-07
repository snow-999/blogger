import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMiniMenu = false;
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
