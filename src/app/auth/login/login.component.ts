import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    // private alertService: AlertService
  ) {
    if (this.userService.User) {
      this.router.navigate(['/cameras']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/cameras';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const loginModel = { email: this.f.email.value, password: this.f.password.value }
    this.userService.signIn(loginModel)
      .subscribe(
        data => {
          this.userService.User = data;
          localStorage.setItem("currentUser", JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }
}
