import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishList = new EventEmitter<any>();

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }

  addWish(): void {
    this.wishList.emit(this.course);
  }
}
