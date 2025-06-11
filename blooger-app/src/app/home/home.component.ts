import { Component } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from '../posts/new-post/new-post.component';
import { PostService } from '../services/postservices';

@Component({
  selector: 'app-home',
  imports: [PostsComponent, CommonModule, NewPostComponent, PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isAdded: boolean = false;

  posts: any

  constructor(private postServices: PostService) { }
  
  getAllPosts() {
    this.postServices.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (err) => console.error('Failed to load posts', err)
    });
    return this.posts;
  }

  makePost() {
    if (this.isAdded) {
      this.isAdded = false;
    } else {
      this.isAdded = true;
    }
  }
}
