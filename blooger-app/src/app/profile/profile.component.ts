import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/postservices';
import { CommonModule } from '@angular/common';
import { newPost, Posts } from '../models/posts.model';
import { NewPostComponent } from "../posts/new-post/new-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { userService } from '../services/userServices';
import { User } from '../models/user.model';
import { posts } from '../posts';



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
  user: any;


  ngOnInit() {
    this.getUserName();
    this.getPostById("1")
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

  getPostId() {
    return localStorage.getItem("postId");
}

  isHighlighted = false;
  getPostClass(id: string) {
    return this.postServices.getPostById(Number(id)).subscribe({
      next(value) {
        console.log(value);
      }
    });
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
  

  // getPosts(): any {
  //   return this.postServices.getPosts();
  // }
  
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

  getPostById(id: string) {
    this.postServices.getPostById(Number(id)).subscribe(post => {
      console.log(post);

    })
     
  }

  // getEditForm(id: string) {
  //   const myPost = this.getPostById(id).subscribe({
  //     next(value) {
  //       if (value.postId == id) {
  //         if (!value.isEdited) {
  //           value.isEdited = true;
  //         } else {
  //           value.isEdited = false;
  //         }
  //     }
  //     },
  //   })
  //   console.log(myPost);
  // }
  
  addPost(newPost: newPost) {
    this.postServices.addPost(newPost).subscribe({
      next(value) {
        console.log(value.postId);
        localStorage.setItem("postId", String(value.postId))
      },
    });
  }
  
  addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
  }
}