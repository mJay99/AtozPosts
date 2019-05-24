import { Component, OnInit } from '@angular/core';
import { PostService } from '../services';
import { PostDetailsComponent } from '../post-details/post-details.component';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:any;
  postId:any;
  constructor(private postService: PostService, private postDetailsComponent:PostDetailsComponent) { 
    this.postId=this.postDetailsComponent.postId;
  }

  ngOnInit() {
    this.viewComments(this.postId)
  }
  
  viewComments(postId:any){
    this.postService.listComments(postId).subscribe(comments=>{
      this.comments=comments;
       console.log("Comments:",this.comments)
    },error=>{
      console.log("Comments:",error)
    });
  }
}
