import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Bestseller() {

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
}


  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/collectinos")
      .then(res => setCollections(res.data.custom_collections))
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
      <h1 className="text-4xl text-center pb-5">Bestsellers</h1>

      {collections.length === 0 ? (
        <p>Loading...</p>
      ) : (
      <Slider {...settings} className="flex justify-center">
        {collections.map((p) => (
        // <Slider {...settings}>
          <div className="p-5" key={p.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <a href={`/collections/${p.handle}`}>
            <img
              src={p.image?.src}
              alt={p.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            </a>
              <h3 className="text-center pt-4 bold uppercase">{p.title}</h3>
            {/*<p>₹{p.variants[0].price}</p> */}
          </div>
        // </Slider>
        ))}
      </Slider>
        
      )}
    </div>
  );
}
