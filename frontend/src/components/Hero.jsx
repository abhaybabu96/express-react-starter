export default function Hero() {
    return (
      <section className="relative bg-gray-100">
        <img 
          src="https://cdn.shopify.com/s/files/1/0734/2525/6670/files/tt-banner_desktop.jpg?v=1763117939"
          alt="Hero"
          className="w-full h-[80vh] object-cover opacity-80"
        />
  
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-black px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            We Cares Your Beauty
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Your Skin Will Love What We Have
          </p>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg">
            Shop Now
          </button>
        </div>
      </section>
    );
  }
  