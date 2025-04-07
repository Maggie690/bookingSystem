import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course: any;

  viewDetails(): void {
    alert('Viewing details');
  }
}
