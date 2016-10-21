import { DoPage } from './app.po';

describe('do App', function() {
  let page: DoPage;

  beforeEach(() => {
    page = new DoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('do works!');
  });
});
