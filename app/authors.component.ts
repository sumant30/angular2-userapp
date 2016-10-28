import { Component } from 'angular2/core';
import { Authorservice } from './authors.service';

@Component({
    selector: 'authors',
    template:
    `
                <h2>{{authorTitle}}</h2>
                <ul>
                        <li *ngFor='#author of authors'>{{author}}</li>
                </ul>
                `,
    providers: [Authorservice]
})

export class AuthorsComponent {
    
    authorTitle:string='Authors';
   
    authors:string[];

    constructor(authorrService:Authorservice){
           
            this.authors=authorrService.getAuthors();
    }
}