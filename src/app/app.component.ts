import { Component } from '@angular/core';
import { INewsProvider } from './app.model';
import { consts } from './app.consts';
import { NewsApiService } from './providers/newsApi.service';
import { HackerNewsService } from './providers/hackerNews.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  providerContent: any;
  selectedProvider: INewsProvider;

  constructor(private newsApiService: NewsApiService,
              private hackerNewsService: HackerNewsService){}

  getNewsFromProvider(provider: string): void {
    this.selectedProvider = consts[provider];
    if(this.selectedProvider.name === "newsApi") {
      this.providerContent = this.newsApiService.getLastNews();
    } else {
      this.providerContent = this.hackerNewsService.getLastNews();
    }
    
  }
  resetProvider() {
    this.providerContent = "";
  }
}
