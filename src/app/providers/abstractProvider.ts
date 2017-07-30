import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import { consts } from '../app.consts';
import { Inject } from '@angular/core';

export abstract class AbstractProvider {
    constructor(protected cacheService) {
    }
    
    getLastNews(endpoint: string) {
        const resultTxt = this.getNews(endpoint);
        return this.processResult(resultTxt);
    }
    processResult(result: any) {
      return  result;
    }

    getNews (provider): any {
        const data: any|null = this.cacheService.get(provider);
        if(data) {
          return data;
        }
        const request = new XMLHttpRequest();
        request.open('GET', provider, false);
        request.send(null);
        if (request.status === 200) {
            this.cacheService.set(provider, JSON.parse(request.responseText), {expires: consts.expriringDate});
            return JSON.parse(request.responseText);
        }
    }
}

export default AbstractProvider;