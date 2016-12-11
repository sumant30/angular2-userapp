import { Component, OnInit } from 'angular2/core';
import { GitHubUserService } from './githubUser.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { githubUser } from './githubUser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'githubUser',
    styleUrls: ['app/avatar.css'],
    templateUrl: 'app/github.component.html',
    providers: [GitHubUserService, HTTP_PROVIDERS]
})
export class GithubUser implements OnInit {

    public user: githubUser;
    public followers: githubUser[];
    isLoadingUserData: boolean = true;

    constructor(private _githubUserService: GitHubUserService) { }

    ngOnInit() {

        Observable.forkJoin(
            this._githubUserService.getUserData(),
            this._githubUserService.getUsersfollowersData()
        ).subscribe(x => {
            this.user = x[0],
                this.followers = x[1]

        },
            null,
            () => { this.isLoadingUserData = false; }

            );

        // this._githubUserService.getUserData().subscribe(x => {
        //     this.user = x;
        //     console.log('User object is ' + this.user.avatar_url + this.user.login);
        // });
    }
}