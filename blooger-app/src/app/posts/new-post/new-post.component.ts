import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newPost } from '../../models/posts.model';
import { PostService } from '../../services/postservices';


@Component({
  selector: 'app-new-post',
  imports: [FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
  
export class NewPostComponent {
  constructor(private postServices: PostService) { }
  
    titleInput: string = '';
    contentInput: string = '';
    isAdded: boolean = true;
  
  
  
  addPost() {
    const newPost: newPost = {
      title: this.titleInput,
      content: this.contentInput,
      date: new Date().toLocaleDateString()
    };
    this.postServices.addPost(newPost).subscribe({
      next(value) {
        console.log(value.postId);
        localStorage.setItem("postId", String(value.postId))
      },
    });
    this.isAdded = false;
  }
  
}