import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidLogin: Boolean = false;
  constructor(private router: Router, private authService: AuthService,private route: ActivatedRoute, private postService: PostService) {}

  signIn(credentials: { user_email: string; user_password: string }) {
    this.authService.login(credentials).subscribe({
      next:(result) => {
      if (result) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        this.router.navigate([returnUrl || 'home']);
      }
    },
    error: (error: Boolean) => {
     this.invalidLogin = true
  }});
  }

  ngOnInit(): void {
    this.postService.getAllUsers()
  }
}
