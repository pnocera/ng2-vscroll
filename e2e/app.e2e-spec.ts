import { VscrollPage } from './app.po';

describe('vscroll App', () => {
  let page: VscrollPage;

  beforeEach(() => {
    page = new VscrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
