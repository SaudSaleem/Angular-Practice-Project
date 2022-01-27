import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'course', component: CourseComponent },
  { path: 'course/:coursename', component: CourseComponent },
  { path: 'contactForm', component: ContactFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
