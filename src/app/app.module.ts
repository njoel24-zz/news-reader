import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HackerNewsService} from './providers/hackerNews.service';
import {NewsApiService} from './providers/newsApi.service';
import {BBCNewsService} from './providers/bbcNews.service';
import {CnnNewsService} from './providers/cnnNews.service';
import {GoogleNewsService} from './providers/googleNews.service';
import {RedditService} from './providers/reddit.service';
import {NationalGeographicService} from './providers/nationalGeographic.service';
import { AppComponent } from './app.component';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewsApiService,
    HackerNewsService,
    BBCNewsService,
    CnnNewsService,
    RedditService,
    NationalGeographicService,
    GoogleNewsService,
    CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
