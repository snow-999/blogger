import { Component } from '@angular/core';
import { IndexedDbService } from '../services/indexed-db.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(private dbService: IndexedDbService) {}

  saveBtn() {
    const post = {
      
      userName: 'john doe',
      userId : 1,
      title: 'My First Blog',
      content: 'This is an offline blog post',
      date: new Date().toISOString()
    }
    this.dbService.savePost(post);
    console.log('Post saved:', post);
  }
  
  
  addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
    }
}