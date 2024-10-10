import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CalendrierComponent } from "../../calendrier/calendrier.component";
import { Post } from '../../../classes/post';
import { PostService } from '../../../services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../../../classes/user';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-fyp',
    standalone: true,
    templateUrl: './fyp.component.html',
    styleUrls: ['./fyp.component.css'],
    imports: [HeaderComponent, CalendrierComponent, CommonModule], 
    providers: [PostService],
})
export class FypComponent implements OnInit {
  posts: Post[] = [];
  newPostContent: string = '';
  currentUser!: User | null;

  constructor(
    private postService: PostService,
    private authService : AuthService
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  addNewPost(): void {
    if (this.newPostContent.trim() !== '') {
      const newPost: Post = {
        contenu: this.newPostContent,
        published: new Date(),
        likes: [],
        comments: []
      };

      this.postService.addPost(newPost).subscribe((post: Post) => {
        this.fetchPosts(); // Refresh the posts after adding a new one
        this.newPostContent = ''; // Clear the input field
      });
    }
   
  }
  getCurrentUser(){
    this.currentUser=this.authService.getCurrentUser();
    return this.currentUser;
  }
  
}
