export type ProductType = {
  id: number,
  title: string,
  price: number,
  quantity: number,
  total: number,
  discountPercentage: number,
  discountedPrice: number,
  thumbnail: string
}
export type CartType = {
  id: number;
  products: ProductType[];
  total: number;
  discountedTotal: number;
  userID: number;
  totalProducts: number;
  totalQuantity: number;
};

export const Cart: CartType = {
  id: 1,
  products: [
    {
      id: 59,
      title: 'Spring and summershoes',
      price: 20,
      quantity: 3,
      total: 60,
      discountPercentage: 8.71,
      discountedPrice: 55,
      thumbnail: 'https://cdn.dummyjson.com/product-images/59/thumbnail.jpg'
    }
  ],
  total: 2328,
  discountedTotal: 1941,
  userID: 97,
  totalProducts: 5,
  totalQuantity: 10
}