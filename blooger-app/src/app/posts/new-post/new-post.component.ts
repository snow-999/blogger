import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-post',
  imports: [FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
  
export class NewPostComponent {
  @Output() add = new EventEmitter<{title:string, content:string , date:string}>();
    
    titleInput: string = '';
    contentInput: string = '';
    isAdded: boolean = true;
  
  
  addPost() {
    this.add.emit({
      title: this.titleInput,
      content: this.contentInput,
      date: new Date().toISOString()
    });
    console.log('Post added:',  this.titleInput)
  }

}