import { PieceOfPlantPage } from './app.po';

describe('piece-of-plant App', () => {
  let page: PieceOfPlantPage;

  beforeEach(() => {
    page = new PieceOfPlantPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
