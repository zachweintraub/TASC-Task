import { CategoriesPipe } from './categories.pipe';
import { ProductsService } from './services/products.service';
import { InventoryProduct } from './InventoryProduct';

describe('CategoriesPipe', () => {
  let productsService: ProductsService;
  let fetchedProducts: InventoryProduct[];
  beforeEach(() => {
    productsService = new ProductsService();
    productsService.getProducts().subscribe(res => fetchedProducts = res);
  });
  
  it('creates an instance', () => {
    const pipe = new CategoriesPipe();
    expect(pipe).toBeTruthy();
  });

  it('does not filter results when the filter category is All', () => {
    const pipe = new CategoriesPipe();
    const filteredProducts = pipe.transform(fetchedProducts, 'All');
    expect(filteredProducts).toEqual(fetchedProducts);
  });

  it('should reduce products to those containing the filtered category', () => {
    const pipe = new CategoriesPipe();
    const expectedOutput = [
      {
        id: 4,
        name: 'Vespa (Imported)',
        price: 15001.25,
        categories: ['Transportation', 'Foreign Goods'],
        isImported: true,
        isTaxExempt: false,
        inventoryQty: 5,
      }
    ];
    const actualOutput = pipe.transform(fetchedProducts, 'Transportation');
    expect(expectedOutput).toEqual(actualOutput);
  });
});
