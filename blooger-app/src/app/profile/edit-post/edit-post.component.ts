import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newPost } from '../../models/posts.model';
import { PostService } from '../../services/postservices';


@Component({
  selector: 'app-edit-post',
  imports: [CommonModule , FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
  
export class EditPostComponent {
  contentInput = ""
  titleInput = ""
  @Input() post: newPost | undefined;
  
  constructor(private postServices: PostService) { }
  
  updatePost() {
    this.postServices.updatePost(this.titleInput, this.contentInput, this.post);
    if (this.post) {
      this.post.isEdited = false;
    }
  }
}
