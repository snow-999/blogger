
import { Injectable } from '@angular/core';
import {posts} from '../posts';
import {Posts} from '../posts/posts.model'


@Injectable({ providedIn: 'root' })
export class PostService {
    private posts = posts;

  getPosts(): Posts[] {
    return [...this.posts]; // return a copy
  }

  deletePost(id: string) {
    this.posts = this.posts.filter(post => post.postId !== id);
  }
}
