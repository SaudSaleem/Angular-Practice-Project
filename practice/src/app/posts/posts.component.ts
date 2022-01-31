import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private serice: PostService) {
    //its expensive and bad approach to call lot of methods in contructor, instead use angular lifecycle hooks
    //Oberverables
    //We use oberveables and promises for async non-blocking operations
    //this method returns Obervable, we subscribe methdo of observable for response handling,
    //subscribe method has 3 diff overloading methods, we can use anyone.(use arrow keys to read all overloading functions)
    //subscribe handles both response, error situations.
  }
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.serice
      .createPost(post) //this service method return Observable
      .subscribe({
        next: (response) => console.log('response', response),
        error: (error: AppError) => {
          //handle expected errors
          if (error instanceof BadInput) {
            console.log('bad request',error.orginalError);
          } else {
           // console.log('unexpected error', error.orginalError);
           throw error //this rethrow error captured by our global error handler (AppErrorHandler) that we created
          }
        },
      });
  }
  updatePost() {
    // without susbcribe method http call will not initiate
    let dummyPost = { title: 'saud' };
    this.serice.updatePost(dummyPost).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
       // console.log('unexpected error', error);
       throw error //this rethrow error captured by our global error handler (AppErrorHandler) that we created
      }
    );
    // this.http.patch(this.url, JSON.stringify({isRead:true}))
    // .subscribe(response => {
    //   console.log(response)
    // })
  }
  deletePost() {
    let id = 4;
    this.serice.deletePost(id).subscribe({
      next: (response) => console.log('response', response),
      error: (error: AppError) => {
        //handle expected errors
        if (error instanceof NotFoundError) {
          console.log('error with given id not found');
        } else {
          //console.log('unexpected error', error);
          throw error //this rethrow error captured by our global error handler (AppErrorHandler) that we created
        }
      },
    });
  }
  ngOnInit(): void {
    this.serice.getPosts().subscribe({
      next: (posts) => console.log('posts', posts),
      error: (error) => {
     // console.log('unexpected error', error)
     throw error //this rethrow error captured by our global error handler (AppErrorHandler) that we created
    }
    });
  }
}
// Angular Lifecycle Hooks
// 1. when component created
// 2. when component rendres
// 3. creates and renders its childrens
// 4. when component destroys
