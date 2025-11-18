import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

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
    axios.get("http://localhost:3000/api/collections")
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
        {collections.map((col) => (
        // <Slider {...settings}>
          <div className="p-5" key={col.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <Link to={`/collection/${col.id}?name=${encodeURIComponent(col.title)}`}>
            <img
              src={col.image?.src}
              alt={col.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            </Link>
              <h3 className="text-center pt-4 bold uppercase">{col.title}</h3>
            {/*<p>₹{col.variants[0].price}</p> */}
          </div>
        // </Slider>
        ))}
      </Slider>
        
      )}
    </div>
  );
}
