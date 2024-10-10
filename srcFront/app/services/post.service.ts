import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  
  constructor(private http: HttpClient) {}
  private baseUrl ='http://localhost:8000';
  getPosts(): Observable<Post[]> {
    // Add JWT token to request headers
    return this.http.get<Post[]>(`${this.baseUrl}/post`);
  }
  addPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/post/new`, newPost);

  }
  getPostById(PostId: number):Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/post/${PostId}/edit`);
  }
  UpdatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/post/${id}/edit`, post);
  }
  
  deletePost(idPost:Number):Observable<Post>{
    return this.http.delete<Post>(`${this.baseUrl}/${idPost}`);
  }
  
}
