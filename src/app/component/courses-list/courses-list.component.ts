import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
// import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-courses-list',
  standalone: false,
  // imports:[NgStyle,CurrencyPipe,DatePipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent implements OnInit {
  ngOnInit(): void {}

  title: string = 'Available courses';
  wishList: Course[] = [];

  courses = [
    {
      id: 1,
      title: 'Intro to Angular',
      description: 'Learn the basics of Angular',
      price: 49,
      date: '2025-03-01',
      onSale: true,
      soldOut: false,
      img: 'angular-logo.png',
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Deep dive into Angular internals',
      price: 99,
      date: '2025-04-10',
      onSale: false,
      soldOut: true,
      img: 'angular-logo.png',
    },
    {
      id: 3,
      title: 'RxJS Fundamentals',
      description: 'Asynchronous data streams',
      price: 45,
      date: '2025-05-05',
      img: 'rxjs-logo.png',
      soldOut: false,
      onSale: true,
    },
  ];

  onCourseBooked(course: Course): void {
    console.log('Parent heard about booking');
  }

  onAddWishList(course: Course): void {
    console.log('Element was added.');
    this.wishList.push(course);
  }
}
