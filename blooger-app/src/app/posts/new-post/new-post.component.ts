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
    console.log("prossece of adding post started");
    const newPost: newPost = {
      title: this.titleInput,
      content: this.contentInput,
      date: new Date().toISOString(),
      userId: this.postServices.getUserId(),
      isEdited: false
    };
    
    
    this.postServices.createPost(newPost).subscribe({next: ()=> {
      this.postServices.addPostToArray(newPost)
    }})
    
    console.log("prossece of adding ended")
    this.isAdded = false;
    this.titleInput="";
    this.contentInput="";
  }
}