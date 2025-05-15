import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newPost } from '../../posts/posts.model';
import { PostService } from '../../services/postservices';

@Component({
  selector: 'app-edit-post',
  imports: [CommonModule , FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
  
export class EditPostComponent {
  constructor(private postServices: PostService){}
  contentInput = ""
  titleInput = ""
  
  updatePost() {
    const newPost: newPost = {
      title: this.titleInput,
      content: this.contentInput,
      date: new Date().toLocaleDateString()
    };
    
    this.postServices.addPost(newPost);
    
  }
}
