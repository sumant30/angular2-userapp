import { Component, OnInit } from 'angular2/core';
import { SignUpFormComponent } from './signup-form.component'
import { ChangePasswordFormComponent } from './change-password.component'
import { PostService } from './post.service';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'my-app',
    directives: [ChangePasswordFormComponent],
    template: `       
       
        `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {

    constructor(private _postservice: PostService) {

    }

    ngOnInit() {
        this._postservice.getPosts()
            .subscribe(x => console.log(x[0]));
    }
}