import { Component, EventEmitter, Output } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { newPost, Posts } from '../posts/posts.model';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from '../posts/new-post/new-post.component';
import { posts } from '../posts';
import { PostService } from '../services/postservices';
@Component({
  selector: 'app-home',
  imports: [PostsComponent, CommonModule, NewPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isAdded: boolean = false;

  constructor(private postServices: PostService) {}

  posts = posts
  
  getAllPosts() {
    return this.postServices.getPosts();
  }

  makePost() {
   if (this.isAdded) {
     this.isAdded = false;
   }else {
     this.isAdded = true;
   }
  }

  
  addPost(newPost: newPost) {
    this.postServices.addPost(newPost);
  }
}
