import { consts } from '../app.consts';
import { AbstractProvider } from './abstractProvider';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import { Injectable } from '@angular/core';

@Injectable()
export class RedditService extends AbstractProvider {

    constructor(protected cacheService: CacheService) {
        super(cacheService);   
    }

}