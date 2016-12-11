import { Component, OnInit } from 'angular2/core';
import { SignUpFormComponent } from './signup-form.component'
import { ChangePasswordFormComponent } from './change-password.component'
import { GithubUser } from './githubUser.component'
import { PostService } from './post.service';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'my-app',
    directives: [ChangePasswordFormComponent,GithubUser],
    template: `
        <githubUser></githubUser>
        
        //    <div *ngIf='isLoading'>
        //        <i  class="fa fa-spinner fa-spin fa-3x"></i>
        //    </div>           
        `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {

    isLoading: boolean = false;
    constructor(private _postservice: PostService) {

    }

    ngOnInit() {
        // this._postservice.getPosts()
        //     .subscribe(x => {
        //         this.isLoading = false;
        //         console.log(x[0]);
        //     });
    }
}