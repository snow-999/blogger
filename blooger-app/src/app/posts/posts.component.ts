import { Component, Input } from '@angular/core';
import {Posts} from './posts.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})


  
export class PostsComponent {
  @Input() post?: Posts;
  

  public addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
  }

}
