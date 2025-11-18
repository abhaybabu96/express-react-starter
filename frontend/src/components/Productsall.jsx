import { useState, useEffect } from "react";
import axios from "axios";

export default function Bestseller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.products); // your API returns { products: [...] }
  //     })
  //     .catch((err) => console.log("Error:", err));
  // }, []); 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bestsellers</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
              <img
                src={p.image?.src}
                alt={p.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
             <h3 className="text-center pt-4 bold uppercase">{p.title}</h3>
             <p className="text-center bold uppercase bold">₹{p.variants[0].price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
