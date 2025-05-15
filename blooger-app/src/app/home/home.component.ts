import { Component, EventEmitter, Output } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { newPost, Posts } from '../posts/posts.model';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from '../posts/new-post/new-post.component';
import { posts } from '../posts';
@Component({
  selector: 'app-home',
  imports: [PostsComponent, CommonModule, NewPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isAdded: boolean = false;


post = posts

  addPost(newPost: newPost) {
    posts.push({
      postId: new Date().getTime().toString(),
      userName: 'john doe',
      userId: '1',
      title: newPost.title,
      content: newPost.content,
      date: newPost.date
    })
  }

  
}
