import { Component } from 'angular2/core';
import { ITweet } from './tweet';
import { TweetService } from './tweet.service';
import { HeartComponent } from './heart.component';

@Component({
     selector:'tweet',
     templateUrl:'app/tweet.component.html',
     providers:[TweetService],
     directives:[HeartComponent]
})

export class TweetComponent {
        
        tweets:ITweet[];

        constructor(tweetService:TweetService){
                this.tweets= tweetService.getTweets();
        }        

}