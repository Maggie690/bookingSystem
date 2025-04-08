import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
// import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-courses-list',
  standalone: false,
  // imports:[NgStyle,CurrencyPipe,DatePipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent implements OnInit {
  title: string = 'Available courses';
  wishList: Course[] = [];
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  onCourseBooked(course: Course): void {
    console.log('Parent heard about booking');
  }

  onAddWishList(course: Course): void {
    console.log('Element was added.');
    this.wishList.push(course);
  }
}
