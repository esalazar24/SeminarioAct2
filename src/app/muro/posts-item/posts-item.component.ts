import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Poster';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss'],
})
export class PostsItemComponent  implements OnInit {
  @Input()
  post: Post = new Post;
  constructor() { }

  ngOnInit() {}

}
