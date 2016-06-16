import { CmtPage } from './app.po';

describe('cmt App', function() {
  let page: CmtPage;

  beforeEach(() => {
    page = new CmtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
