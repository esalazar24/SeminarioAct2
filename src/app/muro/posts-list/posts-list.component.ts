import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Poster';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent  implements OnInit {
  public posts: Post[] = [];
  public post: Post | undefined;
  public postSubscription = new Subscription();
  constructor(
    public postservices: PostService
  ) { }

  ngOnInit() {
   /*this.post = new Post()
   this.post.set(1, 'Publicacion1, 'Gonzalo', 'Iorem', '20-12-2023', 'activo');
   this.posts.push(this.post);*/

    this.postSubscription = this.postservices.all$().subscribe((res: Post[])=>{
      this.posts = res;
    });

    this.postservices.all().subscribe((res)=>{
      console.log('listo');
    });

  }

}
