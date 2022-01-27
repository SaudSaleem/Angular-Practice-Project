import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

//import { RouterModule } from '@angular/router';
// import module

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: '', component: AppComponent },
    //   { path: 'course', component: CourseComponent },
    //   { path: 'course/:coursename', component: CourseComponent },
    //   { path: 'contactForm', component: ContactFormComponent },
    // ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [CoursesService], //this contains all dependencies of all components of particular module
  bootstrap: [AppComponent],
})
export class AppModule {}
