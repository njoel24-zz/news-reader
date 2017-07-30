import { consts } from '../app.consts';
import { AbstractProvider } from './abstractProvider';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import { Injectable } from '@angular/core';

@Injectable()
export class HackerNewsService extends AbstractProvider {
    private results: Array<any>;

    constructor(cacheService: CacheService) {
        super(cacheService);
    }

    getLastNews(endpoint:string) {
        this.results = [];
        const resultText = this.getNews(endpoint);
        const data: any|null = this.cacheService.get("hackerNewsProcessedData");
        if(data) {
            return data;
        }
        this.processResult(resultText);
        this.cacheService.set("hackerNewsProcessedData", this.results, {expires: consts.expriringDate});
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