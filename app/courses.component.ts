import { Component } from 'angular2/core';
import { CoursesService } from './courses.service';
import { AutoGrowDirective } from './auto-grow.directive';

@Component({
    selector: 'courses',
    template:
    `
                <h2>{{courseTitle}}</h2>
                <ul>
                        <li *ngFor='#course of courses'>{{course}}</li><input type='text' autoGrow />
                </ul>
                
                `,
    providers: [CoursesService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    courseTitle: string = 'Courses'

    courses: string[];


    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();

    }
}