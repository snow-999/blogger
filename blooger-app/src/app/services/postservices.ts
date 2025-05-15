
import { Injectable } from '@angular/core';
import {posts} from '../posts';
import {newPost, Posts} from '../posts/posts.model'


@Injectable({ providedIn: 'root' })
export class PostService {
    private posts = posts;

  getPosts(): Posts[] {
    return [...this.posts]; // return a copy
  }

  getPostById(id: string): Posts | undefined {
    return this.posts.find(post => post.postId === id);
  }

  getPostsByUserId(userId: string): Posts[] {
    return this.posts.filter(post => post.userId === userId);
  }

  getPostsByUserName(userName: string): Posts[] {
    return this.posts.filter(post => post.userName === userName);
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
