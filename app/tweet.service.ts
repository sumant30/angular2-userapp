import { ITweet } from './tweet';

export class TweetService {

    getTweets(): ITweet[] {
        var tweets: ITweet[] =
            [
                { image: 'http://www.lorempixel.com/100/100/people', caption: 'Windward', twitterHandle: '@windward', description: 'Look to windward.', isLiked: false, likeCount: 0 },
                { image: 'http://lorempixel.com/100/100/people/?1', caption: 'Angular JS', twitterHandle: '@angularjs', description: 'Angular news, about latest and greatest in angular.', isLiked: false, likeCount: 0 },
                { image: 'http://lorempixel.com/100/100/people/?2', caption: 'UX Bootstrap', twitterHandle: '@ux', description: 'Latest and greatest in ux world.', isLiked: false, likeCount: 0 },
            ];
        return tweets;
    }
}