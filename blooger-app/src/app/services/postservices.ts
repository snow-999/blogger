
import { Injectable } from '@angular/core';
import {posts} from '../posts';
import {newPost, Posts} from '../models/posts.model'
import { userService } from './userServices';
import { User } from '../models/user.model';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostService {
    private posts = posts;
    user: any
  
  constructor(private userServices: userService, private dbService: NgxIndexedDBService) {}
  
  getUserName() {
    const userId = localStorage.getItem("userId")
    let userName: string = "";
      if (userId) {
        this.userServices.getUserById(Number(userId)).subscribe((data) => {
          this.user = data as User;
          
          userName = this.user.userName
        }, error => {
          console.error('Failed to get user:', error);
        });
      }
      return userName;
  }
  
  getUserId() {
      return String(localStorage.getItem("userId"));
  }
  
  getPostId(id:string) {
   return this.posts.filter(post => post.postId === id);
  }

  getAllPosts(): Observable<Posts[]> {
    return this.dbService.getAll('posts');
  }

  getPostById(id: number) {
    return this.dbService.getByKey('posts', id)
  }

  getPostsByUserId(userId: string): Posts[] {
    return this.posts.filter(post => post.userId === userId);
  }

  addPost(newPost: newPost) {
    return this.dbService.add('posts', newPost);
  }
  
  updatePost(title: string, content: string, post?: newPost) {
    if (post) {
      post.title = title;
      post.content = content
      post.date = new Date().toLocaleDateString()
    }
  }

  deletePost(id: string) {
    return this.dbService.delete('posts', id)
  }
}
