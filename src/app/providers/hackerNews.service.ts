import { consts } from '../app.consts';
import { AbstractProvider } from './abstractProvider';

export class HackerNewsService extends AbstractProvider {
    private results: Array<any>;

    constructor() {
        super();
    }

    getLastNews() {
        this.results = [];
        const resultText = this.getNews(consts.hackerNews.endpoint);
        this.processResult(resultText);
        return this.results;
    }
    processResult(result: any) {
        for (let i=0; i <= result.length; i++) {
            this.getHackerNewsStory(result[i]);
            if(i==10){
                return;
            }
        }
    }

    getHackerNewsStory(item) {
        const request = new XMLHttpRequest();
        request.open('GET', "https://hacker-news.firebaseio.com/v0/item/"+item+".json?print=pretty", false);  // `false` makes the request synchronous
        request.send(null);
        if (request.status === 200) {
            this.processHackerNewsTopStory(request.responseText)
        }
    }

    processHackerNewsTopStory(result: any) {
        this.results.push(JSON.parse(result));
    }

}