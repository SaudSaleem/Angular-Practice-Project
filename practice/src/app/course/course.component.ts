import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   coursesPipes : {id: number, name: string} [] = [
     {
       id:1,
       name: 'saud'
     },
     {
      id:2,
      name: 'saleem'
    }
   ];
  constructor(private route: ActivatedRoute) { }
  // EVENT FILTERING CONCEPT
  onKeyUp($event : any){
   if($event.keyCode == 13) console.log('enter pressed')
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log('params',params)
    })
  }

}
