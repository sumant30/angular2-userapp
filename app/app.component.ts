import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { StarComponent } from './star.component';
import { HeartComponent } from './heart.component';
import { VotingComponent } from './voting.component';
import { TweetComponent } from './tweet.component';
import { ZippyComponent } from './zippy.component';
import { ContentFormComponent } from './content-form.component';

@Component({
    selector: 'my-app',
   template: `
                   <content-form></content-form>
               `,
    directives: [ContentFormComponent]
})
export class AppComponent { }