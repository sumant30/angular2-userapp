import { Component } from 'angular2/core';

@Component({
    selector: 'star',
    template:
    `<div (click)='onClick($event)' [style.display]='isHidden ? "block" : "none"' class='glyphicon glyphicon-star-empty'></div>
    <div (click)='onClick($event)'  [style.display]='!isHidden ? "block" : "none"' class='glyphicon glyphicon-star'></div>
    
   `

})

export class StarComponent {

    isHidden: boolean = true;

    onClick($event) {
        this.isHidden = !this.isHidden;
    }
}