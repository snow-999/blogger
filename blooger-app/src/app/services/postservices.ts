
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
    public posts:any[] = []
    
    createPost(newPost: newPost) {  
      this.http.post(this.postApiUrl, newPost,{withCredentials: true}).subscribe({next(value) {
        console.log(value);
      },});
    }


  getPosts(): Observable<newPost[]> {
    return this.http.get<newPost[]>(this.getApiUrl, {withCredentials: true});
  }

showPosts() {
  this.getPosts().subscribe({
    next: (value) => {
      this.posts = value;
    },
    error: (err) => {
      console.error('Error fetching posts:', err);
    },
  });
  return this.posts
}

  getUserId() {
    const token = this.cookieService.get('JWT_TOKEN');
    const decoded = this.decodeToken(token);
    return decoded?.userId;
  }
  
  // getPostId(id:string) {
  //  return thisposts.filter(post => post.postId === id);
  // }
 
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


  updatePost(title: string, content: string, post?: newPost) {
    if (post) {
      post.title = title;
      post.content = content
      post.date = new Date().toLocaleDateString()
      post.isEdited = false;
    }
  }

  getUserPosts(userId:number) {
    return this.posts.filter(post => post.userId == userId)
  }

}
