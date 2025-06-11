import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class NavService {
    public navState: { [key: string]: boolean } = {
        showProfile: false,
        showSignup: true,
        showLogin: true,
        showLogout: false
    };

    setNavState(key: string, value: boolean) {
        this.navState[key] = value;
    }

    toggleNavState(key: string) {
        this.navState[key] = !this.navState[key];
    }

    isLoggedIn(): boolean {
        if (this.navState["showLogin"] || this.navState["showSignup"]) {
            return true;
        }
        return false;
    }
}