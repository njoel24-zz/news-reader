import { Component } from '@angular/core';
import { INewsProvider } from './app.model';
import { consts } from './app.consts';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import { NewsApiService } from './providers/newsApi.service';
import { HackerNewsService } from './providers/hackerNews.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CacheService ]
})
export class AppComponent {
  providerContent: any;
  selectedProvider: INewsProvider;

  constructor(private newsApiService: NewsApiService,
              private hackerNewsService: HackerNewsService,
              private cacheService: CacheService){}

  getNewsFromProvider(provider: string): void {
    this.selectedProvider = consts[provider];
    const data: any|null = this.cacheService.get(provider);
    if(data) {
      this.providerContent = data;
      return;
    }
    if(this.selectedProvider.name === "newsApi") {
      this.providerContent = this.newsApiService.getLastNews();
    } else {
      this.providerContent = this.hackerNewsService.getLastNews();
    }
    this.cacheService.set(provider, this.providerContent, {expires: consts.expriringDate});
  }
  resetProvider() {
    this.providerContent = "";
  }
}
