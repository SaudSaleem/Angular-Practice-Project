import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
interface coursesObject {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular practice';
  movies: string[] = ['movie1', 'movie2', 'movie3'];
  viewMode: string = 'map';
  //interface example
  coursesObjectt: coursesObject = { id: 1, name: 'Saud' };
  coursesObj: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'saud',
    },
    {
      id: 2,
      name: 'ahmad',
    },
    {
      id: 3,
      name: 'safeer',
    },
  ];
  email : string ='saud@yahoo.com';
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  showConsole() {
    console.log('saud console ' + this.viewMode);
  }
  onKeyUp()
  {
    console.log(this.email)
  }
  //event emit by child component
  onFavoriteChange(data: any)
  {
    console.log('onFavoriteChange' + data)
  }
  //method for optimize change detection
  trackCourse(index :any, course:any){
    return course ? course.id : undefined
  }
}
