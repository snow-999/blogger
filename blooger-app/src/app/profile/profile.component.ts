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
  
  
  
  isAdded: boolean = false;
  isLiked: boolean = false;
  user: User | undefined;
  posts: newPost[] = [];


  

  

  getPostId() {
    return localStorage.getItem("postId");
}
  
  

  

  makePost() { 
    if (!this.isAdded) {
      this.isAdded = true;
    } else {
      this.isAdded = false;
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