/* eslint-disable no-unused-expressions */

import CatalogService from '../CatalogService';


function getTestableCatalogService() {
  return CatalogService.create({});
}

describe('CatalogService', () => {
  let catalogService = null;

  beforeEach(() => {
    catalogService = getTestableCatalogService();
  });

  it('can be created', () => {
    const temporaryCatalogService = CatalogService.create({});
    expect(temporaryCatalogService).not.toBeNull();
  });

  describe('#getCategories', () => {
    it('works', async () => {
      const categories = await catalogService.getCategories();
      expect(categories).not.toBeNull();
    });
  });
});
