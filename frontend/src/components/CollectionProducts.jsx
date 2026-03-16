import { useState, useEffect } from "react";
import axios from "axios";
import { useParams , useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ColectionProducts() {
  const { id } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const collectionName = params.get("name") || "Collection";

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`https://express-react-starter-052y.onrender.com/api/collection/${id}`)
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetch("https://express-react-starter-052y.onrender.com/api/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.products); // your API returns { products: [...] }
  //     })
  //     .catch((err) => console.log("Error:", err));
  // }, []); 

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-4xl text-center pb-5">{collectionName}</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-5 gap-10">
         {products.map((p) => (
        // <Slider {...settings}>
          <div className="p-5" key={p.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <Link to={`/product/${p.id}`}>
            <img
              src={p.image?.src}
              alt={p.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            </Link>
              <h3 className="text-center pt-4 bold uppercase">{p.title}</h3>
            <p className="text-center pt-4 bold uppercase bold">₹{p.variants[0].price}</p>
          </div>
        // </Slider>
         ))}
        </div>
      )}
    </div>
  );
}
