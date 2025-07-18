
import { Injectable } from '@angular/core';
import {newPost} from '../models/posts.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
    public postsSubject = new BehaviorSubject<newPost[]>([]);
    public posts = this.postsSubject.asObservable(); // use this in components
    
    public userPosts = this.postsSubject.asObservable();



    createPost(newPost: newPost) {
      return this.http.post(this.postApiUrl, newPost,{withCredentials: true})
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
  return this.http.put<newPost[]>(`${this.updatePostApiUrl}/${postId}`, newPost, {withCredentials: true})
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


  showPosts() {
    this.getPosts().subscribe({
    next: (value) => {
      this.postsSubject.next(value)
      console.log(this.posts);
    },
    error: (err) => {
      console.error('Error fetching posts:', err);
    },
    });
  }

  showMyPosts(){
      this.getPostsByUserId(this.getUserId()).subscribe({
      next: (data) => {
        this.postsSubject.next(data)
        console.log(this.posts);
      },
      error: (err) => {
        console.error('Failed to load posts:', err);
      }
    });
  }

  addPostToArray(newPost: newPost): void {
  const currentPosts = this.postsSubject.getValue(); // get current array
  this.postsSubject.next([newPost, ...currentPosts]); // add new post to beginning
}


}
