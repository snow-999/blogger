import { Component, inject, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { CommonModule } from '@angular/common';

import { UserService } from '../services/userServices';
import { NewPostComponent } from "../posts/new-post/new-post.component";
import { UserComponent } from '../user/user.component';
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
  posts:any[] = []
  isAdded: boolean = false;
  constructor(private postServices: PostService){}
  
  ngOnInit() {
    this.showPosts()
  }

  makePost() {
    this.isAdded = !this.isAdded;
  }

  showPosts() {
    this.postServices.getPosts().subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      },
    });
    return this.posts
  }


}
