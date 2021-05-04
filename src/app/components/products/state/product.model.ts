export interface Product {
  $key: string;
  name: string;
  price: number;
}

export function createProduct(params: Partial<Product>) {
  return {
    $key: params.$key,
    name: params.name,
    price: params.price,
  } as Product;
}
