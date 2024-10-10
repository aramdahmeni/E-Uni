import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';  
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService, UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loginform!: FormGroup;
  enseignant:any;
  users!:User[];
  
  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private userService: UserService,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.getALLusers();
    
  }
  getALLusers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
  getUser(){
    console.log(this.authService.isAdmin());
  }
  get pwdmb() {
    return this.loginform.get('password');
  }

  pwdoblig() {
    return this.pwdmb?.errors?.['required'] && this.pwdmb?.touched;
  }

  get usermb() {
    return this.loginform.get('user');
  }

  useroblig() {
    return this.usermb?.errors?.['required'] && this.usermb?.touched;
  }
  
  login() {
    if (this.loginform.valid) {
      const email = this.loginform.value.email;
      const password = this.loginform.value.password;
      this.authService.login(email, password);
      this.authService.isAdmin();
    }
  }
  }
  


  
  

