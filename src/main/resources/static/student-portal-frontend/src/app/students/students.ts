import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.html',
  styleUrls: ['./students.css'], // fixed typo
  standalone: true,
  imports: [CommonModule, HttpClientModule] // standalone imports
})
export class StudentsComponent implements OnInit {

  students: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/students', { withCredentials: true })
      .subscribe({
        next: data => this.students = data,
        error: err => console.error('Error fetching students', err)
      });
  }
}