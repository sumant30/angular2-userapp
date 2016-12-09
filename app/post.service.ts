import { Http } from 'angular2/http';
import { Post } from './post';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    private _url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http) {

    }

    getPosts(): Observable<Post[]> {
        return this._http.get(this._url)
            .map(x => x.json());
    }

    savePost(post: Post) {
        this._http.post(this._url, JSON.stringify(post))
            .map(x => x.json());
    }
}