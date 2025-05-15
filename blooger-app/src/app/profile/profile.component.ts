import { Component, EventEmitter, Output } from '@angular/core';
import { IndexedDbService } from '../services/indexed-db.service';
import { posts } from '../posts';
import { PostService } from '../services/postservices';
import { CommonModule } from '@angular/common';
import { newPost, Posts } from '../posts/posts.model';
import { NewPostComponent } from "../posts/new-post/new-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";

@Component({
  selector: 'app-profile',
  imports: [CommonModule, NewPostComponent, EditPostComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private dbService: IndexedDbService, private postServices: PostService) { }
  isAdded: boolean = false;
  isEdit: boolean = false;

  private post = posts
  
  getUserName() {
    const userData = localStorage.getItem('user');
    const user = userData ? JSON.parse(userData) : null;
    const userName = user.userName
    return userName;
  }
  getUserId() {
    const userData = localStorage.getItem('user');
    const user = userData ? JSON.parse(userData) : null;
    const userId = user.userId
    return userId;
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

  getEditForm(id:string) {
    this.post = this.post.filter((post) => {
      if (post.postId === id) {
        if (!this.isEdit) {
          this.isEdit = true;
        } else {
          this.isEdit = false;
        }

      }
    });
  }

  
  addPost(newPost: newPost) {
    this.postServices.addPost(newPost);
  }
  
  addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
  }
}