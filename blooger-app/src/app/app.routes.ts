import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { gaurdGuard } from './gaurd/gaurd.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent, canActivate:[gaurdGuard] },
    { path: '**', component: NotfoundComponent, canActivate:[gaurdGuard]}
];
