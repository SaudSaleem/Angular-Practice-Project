import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2>Hello saud from courses {{ title }} {{ getSomeContent() }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <ul>
    <li *ngFor="let s_course of serviceCourses">{{ s_course }}</li>
  </ul>
     `,
})
export class CoursesComponent {
  title = 'Dynamic data binding';
  courses = ['English', 'Urdu', 'Math', 'Computer'];
  serviceCourses : string[] = [];

  constructor(service: CoursesService)
  {
    this.serviceCourses = service.getCourses();
    
     // let service = new CoursesService; //this approach will coulpled this class with services class, so unit testing
     //and other stuff become difficult
     //we should add this courseServices class onto constructor required params area, so angular automatically add this service component(dependency)
     // into this (coursesComponent).
     //We have to inject this dependncy by defining this service class in 'MODULE' file.
  }
  getSomeContent() {
    return 'this content return from method';
  }
}
