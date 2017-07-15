import { NewsreaderPage } from './app.po';

describe('newsreader App', () => {
  let page: NewsreaderPage;

  beforeEach(() => {
    page = new NewsreaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
