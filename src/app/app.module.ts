import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HackerNewsService} from './providers/hackerNews.service';
import {NewsApiService} from './providers/newsApi.service';
import { AppComponent } from './app.component';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewsApiService, HackerNewsService, CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
