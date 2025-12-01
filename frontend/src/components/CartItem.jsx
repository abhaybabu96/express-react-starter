import { useState, useEffect } from "react";
import axios from "axios";

export default function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) return;

    axios
      .get("http://localhost:3000/api/cart", {
        params: { cartId }
      })
      .then((res) => {
        const cartData = res.data.data.cart;
        setCart(cartData);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!cart) return <h1>Loading cart...</h1>;

  return (
    <div className="p-5">
      <h1 className="text-6xl font-bold mb-4 text-center">Your Cart</h1>

      {cart.lines.edges.map((item) => {
        const node = item.node;

        return (
          <div key={node.id} className="border p-4 mb-3 rounded-lg">
            <img
              className="w-24 h-24 object-cover rounded-md"
              src={node.merchandise.product.featuredImage.url}
              alt={node.merchandise.product.featuredImage.alt}
            />
            <h2 className="font-semibold">{node.merchandise.product.title}</h2>
            <p>Variant: {node.merchandise.title}</p>
            <p>Quantity: {node.quantity}</p>
            <p>Price: ₹{node.merchandise.price.amount}</p>
          </div>
        );
      })}

      <h2 className="text-lg font-bold mt-4">
        Total Quantity: {cart.totalQuantity}
      </h2>
    </div>
  );
}
