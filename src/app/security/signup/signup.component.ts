import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { matchingPasswordValidator, isUsernameAvailable } from '../validators';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  private subscription: Subscription[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authentication: AuthenticationService,
    private router: Router
  ) {
    this.subscription = [];
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required], isUsernameAvailable(this.http)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: matchingPasswordValidator
    });
  }

  ngOnInit() {
  }

  registerUser() {
    const newUser = {
      email: this.signupForm.value.email,
      name: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      password: this.signupForm.value.password
    };
    this.subscription.push(this.authentication.signup(newUser).subscribe(() => {
      this.router.navigateByUrl('home');
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach((item) => {
      item.unsubscribe();
    });
  }
}
