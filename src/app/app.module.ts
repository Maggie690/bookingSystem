import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CourseCardComponent } from './component/course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
