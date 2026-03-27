//import SplitText from "./SplitText";
import Particles from "./Galaxy";
import RotatingText from "./Rotate";
export default function Herotext() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white flex-wrap">
      {/* Background */}
      <Particles
        Colors={["#DAA520"]}
        particleCount={1000}
        particleSpread={5}
        speed={0.05}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        cles
      />

      {/* Content */}
      <div className="absolute z-10 text-center px-6 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full mb-6">
          <span className="text-m bg-red-500 px-2 py-0.5 rounded-full">
            New
          </span>
          <span className="text-m text-gray-300">Bakebyu is live!</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          I Design and Build
          <span className="block mt-2">
            Shopify
            <RotatingText
              texts={[
                " Liquid",
                " Headless",
                " Hydrogen",
                " CLI",
                " GraphQL APIs",
                " REST APIs",
                " Plus+",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
          <span className="block mt-2">
            Delivers<span className="text-red-500">.</span>{" "}
            <span className="italic text-gray-300">real impact</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-2xl">
          Hello, I'm
          <span className="text-white text-2xl font-medium"> Abhay Babu</span>
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-red-500 hover:bg-red-600 transition px-6 py-2 rounded-lg text-2xl font-medium cursor-target">
            Shopify Noob
          </button>
        </div>

        {/* Bottom actions */}
        <div className="mt-8 flex text-lg items-center justify-center gap-6 flex-wrap">
          <button className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition cursor-target">
            Let's Connect →
          </button>

          <span className="text-gray-400">helloabhay@gmail.com</span>
        </div>
      </div>
      <div className="text-white-500"> helllo text </div>
    </section>
   
  );
}
