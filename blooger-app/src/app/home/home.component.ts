import { Component } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from "../posts/new-post/new-post.component";
import { PostService } from '../services/postservices';
import { newPost } from '../models/posts.model';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    NewPostComponent,
    PostsComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private postServices: PostService){}
  isAdded: boolean = false;
  posts: newPost[] = [];

  

  

  ngOnInit(): void {
    // subscribe to shared posts$
    this.postServices.posts.subscribe(data => {
      this.posts = data;
    });

    // fetch posts from API once
    this.postServices.showPosts();
  }
  

  makePost() {
    this.isAdded = !this.isAdded;
  }

  
}