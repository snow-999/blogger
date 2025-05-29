
import { Injectable } from '@angular/core';
import {posts} from '../posts';
import {newPost, Posts} from '../models/posts.model'
import { userService } from './userServices';
import { User } from '../models/user.model';


@Injectable({ providedIn: 'root' })
export class PostService {
    private posts = posts;
    user: any
  
  constructor(private userServices: userService) {}
  
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

  getPosts(): Posts[] {
    return [...this.posts]; // return a copy
  }

  getPostById(id: string): Posts | undefined {
    return this.posts.find(post => post.postId === id);
  }

  getPostsByUserId(userId: string): Posts[] {
    return this.posts.filter(post => post.userId === userId);
  }

  getPostsByUserName(userName: string): Posts[] {
    return this.posts.filter(post => post.userName === userName);
  }

  addPost(newPost: newPost) {
    const oldPosts = this.getPosts();
      oldPosts.push({
        postId: new Date().getTime().toString(),
        userName: this.getUserName(),
        userId: this.getUserId(),
        title: newPost.title,
        content: newPost.content,
        date: newPost.date,
        isEdited: false
      })
    this.posts = oldPosts
    localStorage.setItem("post", JSON.stringify(posts))
  }
  
  updatePost(id:string, newPost: newPost) {
    const post = this.getPostById(id);

    console.log(post)
    }

  deletePost(id: string) {
    this.posts = this.posts.filter(post => post.postId !== id);
  }
}
