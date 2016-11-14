import { Component,Input,Output,EventEmitter } from 'angular2/core';

@Component({
    selector:'vote',
    templateUrl: 'app/voting.component.html'
})

export class VotingComponent {

   @Input() voteCount: number = 0;
   @Input() myVote:number=0;

   @Output() vote=new EventEmitter();

   onClick(){
       this.vote.emit({})
   }

}