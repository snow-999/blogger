import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/postservices';
import { CommonModule } from '@angular/common';
import { newPost } from '../models/posts.model';
import { NewPostComponent } from "../posts/new-post/new-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";

import { User } from '../models/user.model';


@Component({
  selector: 'app-profile',
  imports: [CommonModule, NewPostComponent, EditPostComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  constructor(private postServices: PostService) {}
  
  isAdded: boolean = false;
  isLiked: boolean = false;
  user: User | undefined;
  posts: newPost[] = [];
  userId: any;


  ngOnInit() {
    this.getUserId()
    this.postServices.userPosts.subscribe(data => {
      this.posts = data
    })

    this.postServices.showMyPosts()
  }

  getUserId() {
    this.userId = this.postServices.getUserId()
  }

  getPostId() {
    return localStorage.getItem("postId");
}
  
  
deletePost(postId :number| undefined) {
  if (postId == undefined) {
    return
  }
  this.postServices.deletePostById(postId).subscribe({
      next: () => {
        this.posts = this.posts.filter(post => post.postId !== postId);
        console.log('Post deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting post:', err);
      }
    });
}
  

  makePost() { 
    if (!this.isAdded) {
      this.isAdded = true;
    } else {
      this.isAdded = false;
    }
  }

  openEditForm(postId:number | undefined) {
    if (postId) {
      this.posts.filter(post => post.postId === postId).forEach(post => {

        if(!post.isEdited) {
            post.isEdited = true
        } else {
          post.isEdited = false;
        }
        
      });
      
      
    }
  }
  

  
  // getEditForm(id: string) {
  //   this.posts.filter(post => post.postId === id).forEach(post => {
  //     if (post.isEdited === false) {
  //       post.isEdited = true;
  //     } else {
  //       post.isEdited = false;
  //     }
  //   })
  // }
  
  
}