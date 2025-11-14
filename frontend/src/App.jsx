// // import React from 'react'
// import Home from "./pages/Home";

// function App() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // your API returns { products: [...] }
      })
      .catch((err) => console.log("Error:", err));
  }, []); 

  return (

   <div className="">
     <Home />
    <div style={{ padding: "20px" }}>
      
      <h1>Shopify Products</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <img
                src={p.image?.src}
                alt={p.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{p.title}</h3>
              <p>₹{p.variants[0].price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
