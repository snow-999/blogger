import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { newPost } from '../models/posts.model';
@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})


  
export class PostsComponent {
  @Input() post?: newPost;
  
  

  public addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
  }

}
