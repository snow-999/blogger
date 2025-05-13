import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { IndexedDbService } from './services/indexed-db.service';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogger-app';

post = {
      id: 1,
      userName: 'john doe',
      userId : 1,
      title: 'My First Blog',
      content: 'This is an offline blog post',
      date: new Date().toISOString()
    }

constructor(private dbService: IndexedDbService) {}

  ngOnInit(): void {
    // Save a post
    this.dbService.savePost(this.post);

    // Load all posts
    this.dbService.getAllPosts().then(posts => {
      console.log('📚 Blog Posts:', posts);
    });
  }
}
