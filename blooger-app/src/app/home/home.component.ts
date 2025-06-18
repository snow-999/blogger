import { Component, inject, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { CommonModule } from '@angular/common';

import { posts } from '../posts';
import { UserService } from '../services/userServices';
import { NewPostComponent } from "../posts/new-post/new-post.component";
import { UserComponent } from '../user/user.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule, 
    PostsComponent, 
    NewPostComponent, 
    UserComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  
  isAdded: boolean = false;
  posts = posts;
  users: any[] = [];

  makePost() {
    this.isAdded = !this.isAdded;
  }
}
