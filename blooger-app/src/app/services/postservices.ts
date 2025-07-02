
import { Injectable } from '@angular/core';
import {newPost} from '../models/posts.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  
    private postApiUrl = 'http://localhost:8080/api/v1/post';
    private getApiUrl = 'http://localhost:8080/api/v1/posts';
    private getUserPostsApiUrl = 'http://localhost:8080/api/v1/post/user';
    private deletePostApiUrl = 'http://localhost:8080/api/v1/post';
    private updatePostApiUrl = 'http://localhost:8080/api/v1/post';
    public posts:any[] = []
    public userPosts:any[] = []

    createPost(newPost: newPost) {  
      this.http.post(this.postApiUrl, newPost,{withCredentials: true}).subscribe({next(value) {
        console.log(value);
    },});
  }


  getPosts(): Observable<newPost[]> {
    return this.http.get<newPost[]>(this.getApiUrl, {withCredentials: true});
  }

  getUserId() {
    const token = this.cookieService.get('JWT_TOKEN');
    const decoded = this.decodeToken(token);
    return decoded?.userId;
  }
  

 getPostsByUserId(userId: number) {
    return this.http.get<newPost[]>(`${this.getUserPostsApiUrl}/${userId}`,{withCredentials: true})
 }

 deletePostById(postId:number) {
  return this.http.delete<newPost[]>(`${this.deletePostApiUrl}/${postId}`,{withCredentials: true})
 }

 updatePostById(newPost: newPost ,postId:number) {
  return this.http.put<newPost[]>(`${this.deletePostApiUrl}/${postId}`, newPost, {withCredentials: true})
 }

  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
  } catch (e) {
      console.error('Failed to decode token', e);
      return null;
  }
}

  getUserPosts(userId:number) {
    return this.posts.filter(post => post.userId == userId)
  }

}
