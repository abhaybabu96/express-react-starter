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

  const updateCartLine = async (lineId, newQuantity) => {
    const cartId = "gid://shopify/Cart/hWN5eN6kRI4EHTTzspju8IM8?key=fd889268aa043f01ce700eb95eaf6c60";
    if (!cartId) return;
  
    // Shopify does not allow quantity < 1
    if (newQuantity < 1) return;
  
    try {
      const res = await axios.post(`http://localhost:3000/api/cartupdate`, {
        cartId,
        lines: [
          {
            id: lineId,
            quantity: newQuantity,
          },
        ],
      });
  
      // IMPORTANT: Replace whole cart with updated cart
      setCart(res.data.data.cartLinesUpdate.cart);
    } catch (err) {
      console.error("Cart update failed", err);
    }
  };  

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
        <div className="h-150 overflow-y-auto">
        {cart?.lines?.edges?.map((item) => {
            const node = item.node;
            return (
              <div key={node.id} className="flex border-b pb-2 pt-4 px-2 py-2 gap-4">
                <img
                  src={node.merchandise.product.featuredImage.url}
                  alt={node.merchandise.product.title}
                  className="w-18 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-medium text-sm">
                  {node.merchandise.product.title}
                  </h2>
                  {/* Quantity */}
                  <div className="flex items-center mt-2 items-center justify-between">
                  <div className="flex items-center gap-1 mt-1">
                    <button className="border px-1 hover:text-white hover:bg-black cursor-pointer" onClick={() => updateCartLine(node.id, node.quantity - 1) }>-</button>
                    <span>{node.quantity}</span>
                    <button className="border px-1 hover:text-white hover:bg-black cursor-pointer" onClick={() => updateCartLine(node.id, node.quantity + 1) }>+</button>
                  </div>
                    <button className="mt-1 text-sm text-gray-400 hover:text-black flex items-center gap-1 cursor-pointer">
                    <MdDelete /> Remove
                  </button>
                  </div>
                  
                  {/* Price */}
                  <div className="mt-2 flex items-center gap-3">
                    <p className="text-pink-600 font-semibold">{node.merchandise.price.amount && `₹${node.merchandise.price.amount}`}</p>
                    <p className="line-through text-gray-500">{node.merchandise.compareAtPriceV2?.amount && `₹${node.merchandise.compareAtPriceV2?.amount}`}</p>
                  </div>

                
                </div>
              </div>
            );
          })}
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

          <button className="bg-pink-600 text-white font-medium py-3 px-10 rounded m-4">
            <Link to={"https://test-truly-beauty.myshopify.com/cart/c/hWN5eN6kRI4EHTTzspju8IM8?key=fd889268aa043f01ce700eb95eaf6c60"}>CONTINUE TO CHECKOUT</Link> 
          </button>
      </div>
    </>
  );
}
