import { conn } from '../db';

type RawProduct = {
  id: number;
  name: string;
  url_image: string;
  price: string;
  discount: string;
  categoryName: string;
  categoryId: number;
};

type ParsedProduct = {
  id: number;
  name: string;
  url_image: string;
  price: string;
  discount: string;
  category: {
    id: number;
    name: string;
  };
};

export async function getProducts(): Promise<ParsedProduct[]> {
  const products = await conn.query(`SELECT p.id, p.name, p.url_image, p.price, p.discount, c.id AS categoryId, c.name AS categoryName FROM product p INNER JOIN category c ON p.category=c.id`);

  products.map((product: RawProduct) => {
    product['category'] = {
      id: product.categoryId,
      name: product.categoryName
    };
    delete product.categoryId;
    delete product.categoryName;
  });

  return products;
}
