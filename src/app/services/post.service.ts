import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Post } from '../models/Poster';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public url = environment.backend;
  public posts$ = new Subject <Post[]> ();
  public post$ = new Subject <Post> ();
  public posts: Post[] = [];
  public post: Post | undefined;


  constructor(
public http: HttpClient

  ) { }
  all$():Observable<Post[]>{
    return this.posts$.asObservable();

  }
  all(): Observable<any> {
    this.posts = [];
    return this.http.get<Post[]>(this.url + 'posts')
      .pipe(
        map((res: any)=>{
          res.array.forEach((item: any) => {
            this.post = new Post();
            this.post.set(item);
            this.posts.push(this.post);

          });
          this.posts$.next(this.posts);
        })
    );
  }
}

