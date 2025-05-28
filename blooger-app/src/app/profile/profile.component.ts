import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/postservices';
import { CommonModule } from '@angular/common';
import { newPost, Posts } from '../models/posts.model';
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
  isEdit: boolean = false;
  isLiked: boolean = false;
  user: any

  ngOnInit() {
    this.getUserName();
  }


  getUserName() {
    const userId = localStorage.getItem("userId")
    if (userId) {
      this.userServices.getUserById(Number(userId)).subscribe((data) => {
        this.user = data as User;
        
        
      }, error => {
        console.error('Failed to get user:', error);
      });
    }
  }


  isHighlighted = false;
  getPostClass(id: string) {
    return this.postServices.getPostById(id)?.postId;
  }


  
  
  getDynamicStyles(id : string) {
    const postClass = this.getPostClass(id) ?? '';
    const btn = document.getElementsByClassName(postClass.toString())
    if (!this.isHighlighted) {
      this.isHighlighted = true;
      btn[0].classList.add("liked")
    } else {
      this.isHighlighted = false;
      btn[0].classList.remove("liked")
    }
  }
  

  getPosts(): any {
    return this.postServices.getPosts();
  }
  
  getPostsByUserId(userId: string): any {
    return this.postServices.getPostsByUserId(userId);
  }

  deletePost(postId: string) {
    this.postServices.deletePost(postId)
    console.log('Post deleted:', postId);
  }

  makePost() { 
    if (this.isAdded) {
      this.isAdded = false;
    } else {
      this.isAdded = true;
    }
  }

  getPostById(id: string): Posts | undefined {
    return this.postServices.getPostById(id);
  }

  getEditForm(id: string) {
    const myPost = this.getPostById(id)
    console.log(myPost);
      if (myPost?.postId == id) {
        if (!myPost.isEdited) {
          myPost.isEdited = true;
        } else {
          myPost.isEdited = false;
        }
    }
  }
  
  addPost(newPost: newPost) {
    this.postServices.addPost(newPost);
  }
  
  addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
  }
}