import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private url : string = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { 
    http.get(this.url).subscribe(response => {
      console.log(response)
    })
    //Oberverables

    //We use oberveables and promises for async non-blocking operations
    //this method returns Obervable, we subscribe methdo of observable for response handling,
    //subscribe method has 3 diff overloading methods, we can use anyone.(use arrow keys to read all overloading functions)
    //subscribe handles both response, error situations.
  }
  createPost(input: HTMLInputElement)
  {
    let post = {title: input.value}
     this.http.post(this.url,JSON.stringify(post))
     .subscribe(response => {
       console.log(response)
     })
  }
  updatePost()
  {
    // without susbcribe method http call will not initiate
    let dummyPost = {title:"saud"};
    this.http.put(this.url, JSON.stringify(dummyPost))  
    .subscribe(response => {
       console.log(response)
     })
    this.http.patch(this.url, JSON.stringify({isRead:true}))
    .subscribe(response => {
      console.log(response)
    })
  }
  deletePost()
  {
    let id = 4; 
    this.http.delete(this.url + '/' + id)  
    .subscribe(response => {
       console.log(response)
     })
  }
  ngOnInit(): void {
  }

}
// Angular Lifecycle Hooks 
  // 1. when component created
  // 2. when component rendres
  // 3. creates and renders its childrens
  // 4. when component destroys