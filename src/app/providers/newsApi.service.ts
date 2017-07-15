import { consts } from '../app.consts';
import { AbstractProvider } from './abstractProvider';
export class NewsApiService extends AbstractProvider {

    constructor() {
        super();
        
    }
    getLastNews() {
        const resultTxt = this.getNews(consts.newsApi.endpoint);
        return this.processResult(resultTxt);
    }
    processResult(result: any) {
      return  result;
    }
}