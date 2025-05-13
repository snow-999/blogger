import { Component } from '@angular/core';
import {Posts} from './posts.model';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})


  
export class PostsComponent {
  posts: Posts[] = [
    { postId: '1', userName: 'john doe', userId: '1', title: 'My First Blog', content: 'This is an offline blog post', date: new Date().toISOString() },
    { postId: '2', userName: 'jane doe', userId: '2', title: 'My Second Blog', content: 'This is an offline blog post', date: new Date().toISOString() },
    { postId: '3', userName: 'john smith', userId: '3', title: 'My Third Blog', content: 'This is an offline blog post', date: new Date().toISOString() },
    { postId: '4', userName: 'jane smith', userId: '4', title: 'My Fourth Blog', content: 'This is an offline blog post', date: new Date().toISOString() },
  ]
  
  public addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
  }
}
