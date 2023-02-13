import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = '';
  password = '';
  otp = '';
  errorMessage = '';

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    // Initialize the properties for the component
    this.email = '';
    this.password = '';
    this.otp = '';
  }

  onSubmit() {
    if (this.authService.login(this.email, this.password, this.otp)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid login credentials. Please try again.';
    }
  }

}
