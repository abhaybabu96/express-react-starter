import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";


export default function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) return;

    axios
      .get(`https://express-react-starter-052y.onrender.com/api/cart?cartId=${cartId}`)
      .then((res) => {
        const cartData = res.data.data.cart;
        console.log("cartData", cartData);
        setCart(cartData);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!cart) return <h1>Loading cart...</h1>;

  return (
    <div className="w-full min-h-screen bg-white p-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
        <h1 className="text-xl font-bold mb-4 text-left pb-5">Items in your bag</h1>
          {cart?.lines?.edges?.map((item) => {
            const node = item.node;
            return (
              <div key={node.id} className="flex border-b pb-6 gap-6">
                <img
                  src={node.merchandise.product.featuredImage.url}
                  alt={node.merchandise.product.title}
                  className="w-24 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-medium text-lg">
                  {node.merchandise.product.title}
                  </h2>
                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-3">
                    <button className="border px-2 py-1 hover:text-white hover:bg-black cursor-pointer">-</button>
                    <span>{node.quantity}</span>
                    <button className="border px-2 py-1 hover:text-white hover:bg-black cursor-pointer">+</button>
                  </div>

                  {/* Price */}
                  <div className="mt-2 flex items-center gap-3">
                    <p className="text-pink-600 font-semibold">₹{node.merchandise.price.amount}</p>
                    <p className="line-through text-gray-500">₹{node.merchandise.compareAtPriceV2?.amount}</p>
                    <p className="text-green-600 text-sm">Saved 10%</p>
                  </div>

                  <div className="flex items-center mt-4 items-center justify-between">
                    <div className="outer-subscribe-span">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">
                      Subscribe & save 20% on each order!
                    </span>
                    </div>
                    <button className="mt-3 text-sm text-gray-400 hover:text-black flex items-center gap-1 cursor-pointer">
                    <MdDelete /> Remove
                  </button>
                  </div>

                  {/* Dropdown */}
                  <select className="mt-3 border p-2 rounded text-sm">
                    <option>Every 30 Days</option>
                  </select>

                </div>
              </div>
            );
          })}
        </div>

        <div className="border p-6 rounded-lg shadow-sm h-fit">
          <h2 className="font-semibold text-lg mb-4">Order overview</h2>

          <p className="bg-pink-100 text-pink-600 px-3 py-2 rounded text-sm">
            SPEND ₹150, GET ₹150 IN FREE GIFTS
          </p>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Only ₹90.60 away from free gift!
            </p>

            <div className="w-full bg-gray-200 h-2 mt-3 rounded">
              <div
                className="bg-black h-2 rounded"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>

          {/* Totals */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span> <span>{cart.estimatedCost.totalAmount.amount}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span> <span>TBD</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span> <span>TBD</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Estimated Total:</span> <span>₹{cart.estimatedCost.totalAmount.amount}</span>
            </div>
          </div>

          <button className="w-full bg-pink-600 text-white font-medium py-3 rounded mt-6">
            <Link to={cart.checkoutUrl}>CONTINUE TO CHECKOUT</Link> 
          </button>
        </div>
      </div>
    </div>
  );
}
