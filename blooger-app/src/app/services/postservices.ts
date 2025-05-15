
import { Injectable } from '@angular/core';
import {posts} from '../posts';
import {newPost, Posts} from '../posts/posts.model'


@Injectable({ providedIn: 'root' })
export class PostService {
    private posts = posts;

  getPosts(): Posts[] {
    return [...this.posts]; // return a copy
  }

  addPost(newPost: newPost) {
      posts.push({
        postId: new Date().getTime().toString(),
        userName: 'john doe',
        userId: '1',
        title: newPost.title,
        content: newPost.content,
        date: newPost.date
      })
    }

  deletePost(id: string) {
    this.posts = this.posts.filter(post => post.postId !== id);
  }
}
