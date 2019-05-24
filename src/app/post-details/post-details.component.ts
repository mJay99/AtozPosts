import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/posts.service';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;
  postId: any;
  editedPost: any = {};
  isupdatePostVisible: boolean = false;

  constructor(private postService: PostService,
    private alertService: AlertService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.postId = params.id;
      console.log("Selectedpost:", this.postId)
    })
  }

  //This function is used for viewing the post details.

  viewPostDetails(postId: any) {
    this.postService.viewPosts(postId).subscribe(post => {
      this.post = post;

    }, error => {
      this.alertService.alertError("Unable to load Posts.");
      console.log("Selectedpost:", error)
    });
  }


  ngOnInit() {
    this.viewPostDetails(this.postId);
  }


  //This function is used for showing  the dynamic post update section from where we can update the post.
  editPost() {

    if (this.isupdatePostVisible == false) {
      this.isupdatePostVisible = true;
    }
    else {
      this.isupdatePostVisible = false;
    }
  }

  //This function is used for updating the post.
  updatePost() {
    this.postService.updatePosts(this.post).subscribe(post => {
      this.alertService.alertSuccess("Post has been updated successfully");
      this.isupdatePostVisible = false;
      this.ngOnInit();
    }, error => {
      this.alertService.alertError("Unable to update Post.");
      console.log("Post is not updated ", error);
    });

  }

}
