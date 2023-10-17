import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent  implements OnInit {
  public posts: Post[] = [];
  public post: Post | undefined;

  constructor() { }

  ngOnInit() {
    
    this.post = new Post();
    this.post.set(1, 'Trabajo','Edwin Salazar', 'Lorem ipsum', 'Oct 12 2023', 'Active');
    this.posts.push(this.post);
    this.post = new Post();
    this.post.set(2, 'Embarazo','Estefany Torrez', 'Lorem ipsum ipsum ipsum ipsum', 'Oct 10 2023', 'Active');
    this.posts.push(this.post);
    this.post = new Post();
    this.post.set(3, 'Programacion','Lucio', 'Lorem ipsum', 'Oct 12 2023', 'Active');
    this.posts.push(this.post);
    this.post = new Post();
    this.post.set(4, 'Hogares','Manuel', 'Lorem ipsum ipsum ipsum ipsum', 'Oct 10 2023', 'Active');
    this.posts.push(this.post);
      
   
  }

}
