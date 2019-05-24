import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { AlertComponent } from './alert/alert.component';

/* Following are the routes defined for the different componet specific views. 
We can add new components routes later on.  */

const routes: Routes = [
  { path:'', component: PostsComponent },
  // { path:'posts', component: PostsComponent },
  { path:'details/:id', component: PostDetailsComponent}
];    

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent,
    CommentsComponent,
    TopNavbarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
