import { ShoppingCartNg4Page } from './app.po';

describe('shopping-cart-ng4 App', () => {
  let page: ShoppingCartNg4Page;

  beforeEach(() => {
    page = new ShoppingCartNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
