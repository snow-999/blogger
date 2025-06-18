
import { Injectable } from '@angular/core';
import {posts} from '../posts';
import {newPost} from '../models/posts.model'



@Injectable({
  providedIn: 'root'
})

export class PostService {
  
    private posts = posts;
    user: any
  
  
  
  getUserId() {
      return String(localStorage.getItem("userId"));
  }
  
  getPostId(id:string) {
   return this.posts.filter(post => post.postId === id);
  }

  updatePost(title: string, content: string, post?: newPost) {
    if (post) {
      post.title = title;
      post.content = content
      post.date = new Date().toLocaleDateString()
      post.isEdited = false;
    }
  }
}
