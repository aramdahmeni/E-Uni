import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../classes/like';
const baseUrl='';
@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private http:HttpClient) { }
  getLikes():Observable<Like[]>{
    return this.http.get<Like[]>(`${baseUrl}`);

  }

  addLike(newLike: Like): Observable<Like> {
    return this.http.post<Like>(baseUrl, newLike);

  }
  getLikeById(LikeId: number):Observable<Like>{
    return this.http.get<Like>(`${baseUrl}/${LikeId}`);
  }
  deleteLike(LikeId:number):Observable<Like>{
    return this.http.delete<Like>(`${baseUrl}/${LikeId}`);
  }
}
