import { Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.http.post<{ access_token: string }>('http://localhost:5000/api/login', {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
    })
    .subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response.access_token);
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.error('Login error:', err);
      },
    });
  }
}