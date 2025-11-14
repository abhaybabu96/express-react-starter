export default function Features() {
    const list = [
      { title: "Free Shipping", desc: "On all orders above ₹499" },
      { title: "24/7 Support", desc: "We are here anytime" },
      { title: "Secure Payment", desc: "100% protected checkout" },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {list.map((f, index) => (
            <div key={index} className="text-center p-6 shadow-md rounded-xl bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  