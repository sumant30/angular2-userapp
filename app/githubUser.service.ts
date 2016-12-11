import { Http } from 'angular2/http';
import { githubUser } from './githubUser';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubUserService {

    private _userUrl = "https://api.github.com/users/octocat";
    private _followersUrl = " https://api.github.com/users/octocat/followers";

    constructor(private _http: Http) { }

    getUserData(): Observable<githubUser> {
        return this._http.get(this._userUrl).map(x => x.json());
    }

    getUsersfollowersData(): Observable<githubUser[]> {
        return this._http.get(this._followersUrl).map(x => x.json());
    }
}