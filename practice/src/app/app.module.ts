import { TokenService } from './services/token-service';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { CoursesService } from './services/courses.service';
import { AppErrorHandler } from './common/app-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';

//import { RouterModule } from '@angular/router';
// import module

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ContactFormComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    ReactiveFormsComponent,
    PostsComponent,
    NotFoundComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: '', component: AppComponent },
    //   { path: 'course', component: CourseComponent },
    //   { path: 'course/:coursename', component: CourseComponent },
    //   { path: 'contactForm', component: ContactFormComponent },
    // ]),Z
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
  ],
  //this contains all dependencies of all components of particular module
  providers: [
    CoursesService,
    PostService,
    TokenService,
    { provide: ErrorHandler, useClass: AppErrorHandler }, //its tells angular where ever you using 'ErrorHandler' class replace it with 'AppErrorHandler' class
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
