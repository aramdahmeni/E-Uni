import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../classes/comments';
const baseUrl='http://localhost:8000';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private http:HttpClient) { }
  getComment():Observable<Comments[]>{
    return this.http.get<Comments[]>(`${baseUrl}`);

  }

  addComment(newComm: Comments): Observable<Comments> {
    return this.http.post<Comments>(baseUrl, newComm);

  }
  getCommentById(CommId: number):Observable<Comments>{
    return this.http.get<Comments>(`${baseUrl}/${CommId}`);
  }
  UpdateComment(id: number, data: any): Observable<Comments> {
    return this.http.put<Comments>(baseUrl + "/" + id, data);
  }
  deleteComment(commId:Number):Observable<Comments>{
    return this.http.delete<Comments>(baseUrl + "/" + commId);
  }
}

