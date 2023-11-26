import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router, Routes, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HttpClientModule, FormsModule, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  constructor(private router: Router) {}

  formattedDate: string = '';

  ngOnInit() {
    setInterval(() => {
      this.updateDate();
    }, 1000);

    this.updateDate();
    this.router.navigate(['/job-cards']);
  }
  private updateDate() {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    };

    this.formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date());
  }
  title = 'Test';

  navigateToJobCards() {
    this.router.navigate(['/job-cards']);
  }

  navigateToJobPostForm() {
    this.router.navigate(['/job-post-form']);
  }
}
