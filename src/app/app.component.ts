import { Component } from '@angular/core';
import { INewsProvider } from './app.model';
import { consts } from './app.consts';
import { NewsApiService } from './providers/newsApi.service';
import { HackerNewsService } from './providers/hackerNews.service';
import { BBCNewsService } from './providers/bbcNews.service';
import { CnnNewsService } from './providers/cnnNews.service';
import {GoogleNewsService} from './providers/googleNews.service';
import {RedditService} from './providers/reddit.service';
import {NationalGeographicService} from './providers/nationalGeographic.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  providerContent: any;
  providerList: Array<INewsProvider> = consts.providers;
  providerName: string;

  constructor(private newsApiService: NewsApiService,
              private hackerNewsService: HackerNewsService,
              private bbcNewsService: BBCNewsService,
              private cnnNewsService: CnnNewsService,
              private googleNewsService: GoogleNewsService,
              private nationalGeographicService: NationalGeographicService,
              private redditService:RedditService 
            ){}

  getNewsFromProvider(provider: INewsProvider): void {
    this.providerName = provider.name;
    switch(provider.name) {
        case "newsApi":
          this.providerContent = this.newsApiService.getLastNews(provider.endpoint);
        break;
        case "havkerNews":
          this.providerContent = this.hackerNewsService.getLastNews(provider.endpoint);
        break;
        case "bbc-news":
          this.providerContent = this.bbcNewsService.getLastNews(provider.endpoint);
        break;
        case "cnn-news":
          this.providerContent = this.cnnNewsService.getLastNews(provider.endpoint);
        break;
        case "google-news":
          this.providerContent = this.googleNewsService.getLastNews(provider.endpoint);
        break;
        case "reddit":
          this.providerContent = this.redditService.getLastNews(provider.endpoint);
        break;
        case "national-geographic":
          this.providerContent = this.nationalGeographicService.getLastNews(provider.endpoint);
        break;
    }

    
  }
  resetProvider() {
    this.providerContent = "";
  }
}
