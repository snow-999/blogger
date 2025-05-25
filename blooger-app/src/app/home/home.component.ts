import { Component, DoCheck } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { newPost } from '../posts/posts.model';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from '../posts/new-post/new-post.component';
import { posts } from '../posts';
import { PostService } from '../services/postservices';

@Component({
  selector: 'app-home',
  imports: [PostsComponent, CommonModule, NewPostComponent, PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck{
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

  ngDoCheck(): void {
      console.log('Ng do check');
      
  }
}
