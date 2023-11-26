import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterComponent } from './filter/filter.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PaginationComponent, FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  jobs: any[] = [];
  displayedJobs: any[] = [];
  itemsPerPage: number = 6;
  currentPage: number = 1;
  totalPages: number = 1;
  jobFilter: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any>('/assets/jobsData.json').subscribe(data => {
      this.jobs = data.jobs;
      this.updateDisplayedJobs();
    });
  }

  updateDisplayedJobs() {
    const filteredJobs = this.filterJobs();
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.totalPages = Math.ceil(filteredJobs.length / this.itemsPerPage);
    this.displayedJobs = filteredJobs.slice(startIndex, endIndex);
  }

  filterJobs(): any[] {
    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(this.jobFilter.toLowerCase())
    );
  }

  updateFilter(filter: string) {
    this.jobFilter = filter;
    this.updateDisplayedJobs();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updateDisplayedJobs();
  }

}