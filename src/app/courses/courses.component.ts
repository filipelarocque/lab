import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  title: "The title of courses page";
  courses;

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

}
