import { consts } from '../app.consts';
import { AbstractProvider } from './abstractProvider';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsApiService extends AbstractProvider {

    constructor(protected cacheService: CacheService) {
        super(cacheService);   
    }
    getLastNews() {
        const resultTxt = this.getNews(consts.newsApi.endpoint);
        return this.processResult(resultTxt);
    }
    processResult(result: any) {
      return  result;
    }
}