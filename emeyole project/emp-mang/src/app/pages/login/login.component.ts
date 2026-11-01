import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginobj = { userName: '', password: '' };

  private http = inject(HttpClient);
  private router = inject(Router);

  onLogin() {
    this.http.post<any>(environment.API_URL + '/login', this.loginobj).subscribe({
      next: (resp) => {
        if (resp.result) {
          localStorage.setItem('emp_user', JSON.stringify(resp.data));
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          alert('User not found');
        }
      },
      error: (err) => {
        alert('Server error, please try again');
        console.error(err);
      }
    });
  }
}