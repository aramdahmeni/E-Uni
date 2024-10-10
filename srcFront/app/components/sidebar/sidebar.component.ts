import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  constructor( private router: Router ,private authService :AuthService){ }
  ngOnInit(): void {
    this.getCurrentUser();
  }
  activeMenuItem: string = '';
  currentUser!:User | null;
  
  toggleMenuItem(menuItemId: string): void {
    this.activeMenuItem = menuItemId;
  }
  logout(){
    this.authService.logout();
  }
  getCurrentUser(){
    this.currentUser=this.authService.getCurrentUser();
    return this.currentUser;
  }
  


}


