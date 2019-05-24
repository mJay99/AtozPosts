import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  //This is a base api for communicating with the server.
  
  baseapi: string = environment.baseApi;

  constructor(private http: HttpClient) { }

  // This service method is used for fetching posts from the server.
  listPosts(): Observable<any> {
    return this.http.get(this.baseapi + "/posts");
  }

  // This service method is used for creating a post.
  createPosts(post: any): Observable<any> {
    return this.http.post(this.baseapi + "/posts", post);
  }

  // This service method is used for updating a post.
  updatePosts(updatedPost: any): Observable<any> {
    return this.http.put(this.baseapi + "/posts" + "/" + updatedPost.id, updatedPost);
  }
  // This service method is used for vieving a detail post. 
  viewPosts(selectedPostId: any): Observable<any> {
    return this.http.get(this.baseapi + "/posts" + "/" + selectedPostId);
  }
  // This service method is used for displaying comments on specific post.
  listComments(selectedPostId: any): Observable<any> {
    return this.http.get(this.baseapi + "/posts" + "/" + selectedPostId + "/" + "comments");
  }
}
