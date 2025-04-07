import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course: any;
  @Output() courseBooked = new EventEmitter<any>();

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }

  // viewDetails(): void {
  //   alert('Viewing details');
  // }
}
