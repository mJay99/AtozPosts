import { Component, OnInit } from '@angular/core';
import { PostService } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  createPostForm: FormGroup;
  iscreatePostVisible: Boolean = false;
  posts: any;

  constructor(private formBuilder: FormBuilder,
    private postService: PostService,
    private alertService: AlertService) { }

  createPostVisible() {
    if (this.iscreatePostVisible == false) {
      this.iscreatePostVisible = true;
    }
    else {
      this.iscreatePostVisible = false;
    }

  }

  ngOnInit() {

    // Here we are creating reactive form.

    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required
      ])],
      userId: [Validators.compose([
      
      ])],
      body: ['', Validators.compose([
        Validators.required
      ])]
    });
    
    // Here we are loading the posts from server whenever the component is loaded. 
    this.listPosts();
  }
  
  // This is a simple getter function for accessing form elements
  get f(): any {
    return this.createPostForm.controls;
  }
 
  // This is submit function which creates the new post using post service.
  onSubmit() {
    this.createPostForm.markAsTouched();

    // stop here if form is invalid
    if (this.createPostForm.invalid || !this.createPostForm.touched) {
      return;
    }

    this.postService.createPosts(this.createPostForm.value).subscribe(
      data => {
        this.iscreatePostVisible = false;
        this.alertService.alertSuccess("Post has been created successfully.");
      },
      error => {
        console.log(error);
        this.alertService.alertError("Unable to create post.");

      }
    );
  }

  // This function fetches all the posts form the servers.
  listPosts() {
    this.postService.listPosts().subscribe(posts => {
      this.posts = posts;
      this.alertService.alertSuccess("Post are loaded successfully.");
    }, error => {
      this.alertService.alertError("Unable to load posts.");
      console.log(error)
    })
  }

}
