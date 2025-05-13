import { Component, EventEmitter, Output } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { Posts } from '../posts/posts.model';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from '../posts/new-post/new-post.component';

@Component({
  selector: 'app-home',
  imports: [PostsComponent, CommonModule, NewPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isAdded: boolean = false;

  posts: Posts[] = [
    { postId: '1', userName: 'john doe', userId: '1', title: 'My First Blog', content: 'This is an offline blog post', date: new Date().toISOString() },
    { postId: '2', userName: 'jane doe', userId: '2', title: 'My Second Blog', content: 'This is an offline blog post', date: new Date().toISOString() },
    { postId: '3', userName: 'john smith', userId: '3', title: 'My Third Blog', content: 'This is an offline blog post', date: new Date().toISOString() },
    { postId: '4', userName: 'jane smith', userId: '4', title: 'My Fourth Blog', content: 'This is an offline blog post', date: new Date().toISOString() },
  ]

  addPost(): Boolean {
    return this.isAdded = true;
  }
}
