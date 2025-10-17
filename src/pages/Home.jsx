import React from "react";
import ProductCard from "../components/ProductCard";
import { productsData } from "../productsData";

const Home = ({ addToCart }) => {
  return (
    <div className="home">
      <h2>Products</h2>
      <div className="products-grid">
        {productsData.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
