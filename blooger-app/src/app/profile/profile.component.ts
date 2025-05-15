import { Component, EventEmitter, Output } from '@angular/core';
import { IndexedDbService } from '../services/indexed-db.service';
import { posts } from '../posts';
import { PostService } from '../services/postservices';
import { CommonModule } from '@angular/common';
import { newPost } from '../posts/posts.model';
import { NewPostComponent } from "../posts/new-post/new-post.component";

@Component({
  selector: 'app-profile',
  imports: [CommonModule, NewPostComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private dbService: IndexedDbService, private postServices: PostService) { }
  isAdded: boolean = false;

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
  
  addPost(newPost: newPost) {
    this.postServices.addPost(newPost);
  }
  
  addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
    }
}