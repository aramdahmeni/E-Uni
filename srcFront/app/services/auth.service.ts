import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'user';
  private readonly USER_TYPE_KEY = 'user_type';
  private readonly USER_ROLE_KEY = 'user_role';
  user!: User;

  constructor(
    private router: Router,
    private userService: UserService 
  ) {}

  login(email: string, password: string): void { 
    this.userService.getUserByEmail(email).subscribe((authenticatedUser) => {
      if (authenticatedUser && authenticatedUser.password === password) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(authenticatedUser));

        if (authenticatedUser.type) {
          localStorage.setItem(this.USER_TYPE_KEY, authenticatedUser.type);
        }
        if (authenticatedUser.type === 'administrateur') {
          window.location.href = 'http://localhost:8000/admin';
        } else {
          this.router.navigate(['/userInter']);
        }
      } else {
        alert('User not found or incorrect password');
      }
    });
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.USER_TYPE_KEY);
    localStorage.removeItem(this.USER_ROLE_KEY);
    alert('You have been logged out');
    this.router.navigate(['/homepage']);
    // window.location.reload();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }
  

  isAdmin(): boolean {
    const userRole = localStorage.getItem(this.USER_ROLE_KEY);
    return userRole === 'administrateur';
  }

  getCurrentUser(): User | null {
    const storedUser = localStorage.getItem(this.USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  }

}
