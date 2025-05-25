import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newPost } from '../../models/posts.model';


@Component({
  selector: 'app-edit-post',
  imports: [CommonModule , FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
  
export class EditPostComponent {
  contentInput = ""
  titleInput = ""
  @Input() post?: newPost;
  
  updatePost() {
    if (this.post) {
      this.post.title = this.titleInput;
      this.post.content = this.contentInput
      this.post.date = new Date().toLocaleDateString()
    }
    
  }
}
