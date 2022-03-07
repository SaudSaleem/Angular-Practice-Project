import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { combineLatestWith, map, Observable } from 'rxjs';
import { TokenService } from '../services/token-service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  coursesPipes: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'saud',
    },
    {
      id: 2,
      name: 'saleem',
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public tokenService: TokenService
  ) {}
  navigate() {
    this.router.navigate(['/contactForm'], {
      queryParams: { page: 1, name: 'saud' },
    });
  }
  // EVENT FILTERING CONCEPT
  onKeyUp($event: any) {
    if ($event.keyCode == 13) console.log('enter pressed');
  }
  ngOnInit(): void {
    console.log('course component ab render huwa hai');
    // let id = this.route.snapshot.paramMap.get('id') //use this apprach if you sure that user will move from this component and come back with new id as param
    //  but using thisappraoch component will re-initialize
    this.route.paramMap.subscribe((params: ParamMap) => {
      //when ever params chnages methods get updated according to new id/param
      console.log('params', params); //so using obserable angular do not destroy this component, becuz we remains on same component, only data changes
    });

    //get query params
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      console.log('Query Params', params);
    });

    //Rather to subscribe to two observables, we will use Observable 'combineLates' factory method(a factory method always return a new object without calling new operator) to combile these
    //two obserables into one. 'combineLatest' returns new observable

    //u can switchMap to return obserable<any>, every item will be any type
    this.route.paramMap
      .pipe(
        combineLatestWith(this.route.queryParamMap),
        map(([params, qParams]) => {
          return {
            params,
            qParams,
          };
        })
      )
      .subscribe((params) => console.log('combine params', params));
  }
}
