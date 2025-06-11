import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/postservices';
import { CommonModule } from '@angular/common';
import { newPost } from '../models/posts.model';
import { NewPostComponent } from "../posts/new-post/new-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { userService } from '../services/userServices';
import { User } from '../models/user.model';


@Component({
  selector: 'app-profile',
  imports: [CommonModule, NewPostComponent, EditPostComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  constructor( private postServices: PostService, private userServices: userService) { }
  
  isAdded: boolean = false;
  isLiked: boolean = false;
  user: User | undefined;
  posts: newPost[] = [];


  ngOnInit() {
    this.getUserName();
    this.getPostsByUserId();
  }

  getUserName() {
    const userId = localStorage.getItem("userId")
    if (userId) {
      this.userServices.getUserById(Number(userId)).subscribe((data) => {
        console.log("userName found");
        
        this.user = data as User;
        console.log("this is my userNAme", this.user.userName);
        
      }, error => {
        console.error('Failed to get user:', error);
      });
    }
  }

  getPostId() {
    return localStorage.getItem("postId");
}
  
  getPostsByUserId(): void {
    const userIdStr = localStorage.getItem("userId");
    if (!userIdStr) {
      console.error('User ID not found in local storage');
      return;
    }
    this.postServices.getPostsByUserId(userIdStr).subscribe({
      next: (posts: newPost[]) => {
        console.log('Posts by user:', posts);
        this.posts = posts;
      },
      error: (error) => {
        console.error('Error fetching posts by user:', error);
      }
    });
  }

  deletePost(postId: string) {
    this.postServices.deletePost(postId)
    console.log('Post deleted:', postId);
  }

  makePost() { 
    if (!this.isAdded) {
      this.isAdded = true;
    } else {
      this.isAdded = false;
    }
  }

  getPostById(id: string) {
    this.postServices.getPostById(Number(id)).subscribe(post => {
      console.log(post);
    })
  }

  
  getEditForm(id: string) {
    this.posts.filter(post => post.postId === id).forEach(post => {
      if (post.isEdited === false) {
        post.isEdited = true;
      } else {
        post.isEdited = false;
      }
    })
  }
  
  addPost(newPost: newPost) {
    this.postServices.addPost(newPost).subscribe({
      next(value) {
        console.log(value.postId);
        localStorage.setItem("postId", String(value.postId))
      },
    });
  }
}