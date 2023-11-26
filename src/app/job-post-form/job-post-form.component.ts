// job-post-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-post-form',
  imports: [ReactiveFormsModule],
  standalone: true,
  styleUrls: ['./job-post-form.component.css'],
  templateUrl: './job-post-form.component.html',
})
export class JobPostFormComponent implements OnInit {
  jobForm!: FormGroup;
  jsonFilePath = '/assets/jobsData.json';

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      perks: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  postJob() {
    this.http.get<any>(this.jsonFilePath).subscribe(data => {
      const existingJobs = data.jobs;

      const newJob = {
        id: this.generateUniqueId(existingJobs),
        title: this.jobForm.value.title,
        description: this.jobForm.value.description,
        perks: this.jobForm.value.perks,
        salary: this.jobForm.value.salary,
      };

      existingJobs.push(newJob);

      const blob = new Blob([JSON.stringify({ jobs: existingJobs })], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'updatedJobsData.json';
      link.click();

      this.http.put(this.jsonFilePath, { jobs: existingJobs }).subscribe(() => {
        console.log('Job posted successfully:', newJob);
        this.router.navigate(['/job-cards']);
      });
    });
  }

  goBack() {
    this.router.navigate(['/job-cards']);
  }

  private generateUniqueId(jobs: any[]): number {
    const lastJob = jobs[jobs.length - 1];
    const newId = lastJob ? lastJob.id + 1 : 1;
    return newId;
  }
}
