import Main from "./comp/main/Main";
import Sort from "./comp/sort/Sort";

import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "t-shirt", price: 25, image: "path_to_tshirt_image" },
    { id: 2, name: "jacket", price: 60, image: "path_to_jacket_image" },
    { id: 3, name: "sweater", price: 45, image: "path_to_sweater1_image" },
    { id: 4, name: "sweater", price: 45, image: "path_to_sweater2_image" },
  ]);

  const sortProducts = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "high-to-low") return b.price - a.price;
      if (order === "low-to-high") return a.price - b.price;
      return 0;
    });
    setProducts(sortedProducts);
  };

  return (
    <div className="App">
      <Sort onSort={sortProducts} />
      <Main products={products} />
    </div>
  );
}

export default App;
