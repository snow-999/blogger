import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/signup';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
  createUser(user: User) {
   
    this.http.post(this.apiUrl,user).subscribe({next(value) {
      console.log(value);
    },})
  }

  getUser(user: any): Observable<any> {
    const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
  return this.http.post('http://localhost:8080/api/v1/login', user, { withCredentials: true });
}
}