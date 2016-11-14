import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { StarComponent } from './star.component';
import { HeartComponent } from './heart.component';
import { VotingComponent } from './voting.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 </h1>
                
                <vote></vote>
                `,
    directives: [CoursesComponent,AuthorsComponent,StarComponent,HeartComponent,VotingComponent]
})
export class AppComponent { }