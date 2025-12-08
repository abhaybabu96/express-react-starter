"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);
  const [cartId, setCartId] = useState(null);

  // Slick slider refs
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(mainSlider.current);
    //console.log('Maincurrent',mainSlider.current);
    setNav2(thumbSlider.current);
    //console.log('thumbSlider',thumbSlider.current);

    async function setupCart() {
      let storedCartId = localStorage.getItem("cartId");
      if (!storedCartId) {
        try {
          const res = await axios.post("http://localhost:3000/api/cart/create");
          storedCartId = res.data.data.cartCreate.cart.id;
          localStorage.setItem("cartId", storedCartId);
        } catch (err) {
          console.error("Error creating cart:", err);
        }
      }
      setCartId(storedCartId);
    }
    setupCart();

  }, []);

  // click funcation
  const addToCart = async () => {
    const cartId = localStorage.getItem("cartId");
    const response = await axios.post("http://localhost:3000/api/cart/add", {
      cartId,
      variantId: product.variants[0].id,  
      quantity: 1,
    });

    console.log("Cart Updated:", response.data);
    //alert("Product Added into the cart");
    // open side cart
    window.dispatchEvent(new Event("open-side-cart"));
  };


  // Slick settings
  const mainSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: nav2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 9000
  };

  const thumbSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    focusOnSelect: true,
    asNavFor: nav1,
    arrows: false,
    infinite: true
  };
  

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${pid}`)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => console.log(err));
  }, [pid]);
    

  if (!product) return <p>Loading product...</p>;
  return (
    <div className="w-full max-w-8/10 mx-auto">
      <div className="grid grid-cols-8 gap-10 p-10">
        {/* LEFT — Vertical Thumbnail Slider */}
        <div className="col-span-1 size-35">
          <Slider {...thumbSettings} ref={thumbSlider}>
            {product.images.map((img) => (
              <div key={img.id} className="p-1 cursor-pointer">
                <img
                  src={img.src}
                  alt="thumb"
                  className="w-full h-auto border rounded"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* CENTER — Main Image Slider */}
        <div className="col-span-3">
          <Slider {...mainSettings} ref={mainSlider}>
            {product.images.map((img) => (
              <div key={img.id}>
                <img
                  src={img.src}
                  alt="main"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* RIGHT — Product Information */}
        <div className="col-span-4 p-5">
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

          <p className="text-xl font-semibold mb-4">
            ₹{product.variants[0].price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.body_html.replace(/<[^>]+>/g, "")}
          </p>
          
          <button id={product.variants[0].id} className="px-6 py-3 bg-black text-white rounded-md w-full cursor-pointer" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
