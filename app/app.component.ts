import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { StarComponent } from './star.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 </h1>
                <courses></courses>
                <authors></authors>
                <star></star>
                `,
    directives: [CoursesComponent,AuthorsComponent,StarComponent]
})
export class AppComponent { }