import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

export default function SideCart() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(null);

  useEffect(() => {

    const cartIdSc = localStorage.getItem("cartId");
    if (!cartIdSc) return;
    axios
      .get(`http://localhost:3000/api/cart?cartId=${cartIdSc}`)
      .then((res) => {
        const cartData = res.data.data.cart;
        console.log("cartData", cartData);
        setCart(cartData);
    })
    .catch((err) => console.log(err));

    function openCart() {
      setOpen(true);
    }
    // 👂 Listen for the global event
    window.addEventListener("open-side-cart", openCart);
    return () => {
      window.removeEventListener("open-side-cart", openCart);
    };
  }, []);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={() => setOpen(false)}>X</button>
        </div>
        {/* the details is here */}
        <div className="mt-6 space-y-3 text-sm p-3">
            <div className="flex justify-between">
              <span>Subtotal</span> <span>{cart?.estimatedCost?.totalAmount?.amount}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span> <span>TBD</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span> <span>TBD</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Estimated Total:</span> <span>₹{cart?.estimatedCost?.totalAmount?.amount}</span>
            </div>
          </div>

          <button className="w-full bg-pink-600 text-white font-medium py-3 rounded mt-6 mr-4 ml-4">
            <Link to={"https://test-truly-beauty.myshopify.com/cart/c/hWN5eN6kRI4EHTTzspju8IM8?key=fd889268aa043f01ce700eb95eaf6c60"}>CONTINUE TO CHECKOUT</Link> 
          </button>
      </div>
    </>
  );
}
