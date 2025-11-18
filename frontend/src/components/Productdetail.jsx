import { useState, useEffect } from "react";
import axios from "axios";
import { useParams , useLocation } from "react-router-dom";

export default function Colectionproduct() {
  const { pid } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const collectionName = params.get("name") || "Collection";

  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${pid}`)
      .then(res => setproduct(res.data.product))
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/product")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setproduct(data.product); // your API returns { product: [...] }
  //     })
  //     .catch((err) => console.log("Error:", err));
  // }, []); 
  const p = product;
  return (
    <div style={{ padding: "20px" }}>
      {/* <h1 className="text-4xl text-center pb-5">{collectionName}</h1> */}

      {product.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-5 gap-10">
         {/* {product.map((p) => ( */}
        {/* <Slider {...settings}> */}
          <div className="p-5" key={p.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <a href={`product/${p.id}`}>
            <img
              src={p.image?.src}
              alt={p.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            </a>
              <h3 className="text-center pt-4 bold uppercase">{p.title}</h3>
            <p className="text-center pt-4 bold uppercase bold">₹{p.variants[0].price}</p>
          </div>
         {/* </Slider> */}
         {/* ))} */}
        </div>
      )}
    </div>
  );
}
