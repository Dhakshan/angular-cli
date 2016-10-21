export class DoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('do-app h1')).getText();
  }
}
