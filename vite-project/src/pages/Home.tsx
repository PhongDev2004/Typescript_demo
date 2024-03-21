import { useEffect, useState } from "react";
import ProductList from "~/components/ProductList";
import {Product} from "~/types/Product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])

  // Get API

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      return () => {
        console.log("Unmount!");
        //! cleanup function
      }
    })
  }, [])
  return (
    <div>
      <h2>Product New</h2>
      <ProductList products={products}/>
    </div>
  );
};

export default Home;