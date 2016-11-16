import { Component,Input } from 'angular2/core';

@Component({
    selector:'heart',
    template:
    `
    <i class='glyphicon  glyphicon-heart' [style.color]='setColor()' (click) = 'onClick()' ></i> {{likes}}
    `,
    styles:[`
    .glyphicon-heart{
            cursor:pointer;
    }
    
    `]
})

export class HeartComponent {
        @Input ()   likes : number = 10;
        @Input ()   isSelected :boolean = false;

        onClick(){
            this.isSelected=!this.isSelected;

            if(this.isSelected){
                this.likes = this.likes+1;
            }
            else{
                this.likes = this.likes-1;
            }
        }

        setColor(){
             if(this.isSelected){
               return 'pink';
            }
            else{
                return '#ccc';
            }   
        }
}