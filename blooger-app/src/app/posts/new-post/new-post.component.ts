import { Component } from '@angular/core';


@Component({
  selector: 'app-new-post',
  imports: [],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
    
    titleInput: string = '';
    contentInput: string = '';
  isAdded: boolean = true;
  
  addPost () {
    this.titleInput = '';
    this.contentInput = '';
    this.isAdded = false;
  }

}