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
      date: new Date().toLocaleDateString(),
      userId: this.postServices.getUserId(),
      isEdited: false
    };
    
    this.postServices.addPost(newPost).subscribe({
      next(value) {
        console.log(value.isEdited);
        console.log(value);
        console.log("Post added successfully");
        
        
        localStorage.setItem("postId", String(value.postId))
      },
      error(err) {
        console.log(err)
      }
    });
    this.isAdded = false;
  }
}