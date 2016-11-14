import { Component } from 'angular2/core';

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
        likes : number = 10;
        isSelected :boolean = false;

        onClick(){
            this.isSelected=!this.isSelected;

            if(this.isSelected){
                this.likes = 11;
            }
            else{
                this.likes = 10;
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