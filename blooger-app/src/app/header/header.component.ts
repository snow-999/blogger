import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavService } from '../services/navServices';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router, public navServices: NavService) {}
  showMiniMenu = false;
  showProfile = false;
  showSignup = false;
  showLogin = false;
  logOut() {
    
    

    this.navServices.toggleNavState("showLogout");
    this.navServices.toggleNavState("showProfile");
    this.navServices.toggleNavState("showSignup");
    this.navServices.toggleNavState("showLogin");
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
