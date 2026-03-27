import Particles from "./Galaxy";
import ScrollStack from "./ScrollStackjsx";
import ElectricBorder from "./ElectricBorder";
import SplitText from "./SplitText";

export default function App() {
  return (
    <section className="relative w-full bg-black text-black">
      <div className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-center bg-black">
        <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent">
          My Journey Towards:{" "}
        </span>
        <span className="text-[#95BF47]">
          <SplitText
            text="Shopify"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </span>
      </div>
      <div className="absolute inset-0 z-10">
        <Particles
          Colors={["#DAA520"]}
          particleCount={1000}
          particleSpread={5}
          speed={0.05}
          particleBaseSize={100}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="relative z-10 bg-transparent py-20 min-h-[100vh]">
        <ScrollStack>
          <ElectricBorder
            color="red"
            speed={1}
            chaos={0.12}
            thickness={4}
            style={{ borderRadius: 16 }}
          >
            <div className="bg-black text-white py-24 px-6 md:px-16 rounded-lg">
              <div className="max-w-7xl mx-auto flex flex-row-reverse gap-12 items-center">
                {/* LEFT CONTENT */}
                <div>
                  <p className="text-sm tracking-widest text-red-500 mb-4">
                    DISCOVERY
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    About <span className="text-red-500">The Company</span>
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    We specialize in building modern, scalable web applications
                    with a strong focus on performance and user experience. Our
                    team delivers cutting-edge solutions using the latest
                    technologies like React, Next.js, and Tailwind CSS.
                  </p>

                  <p className="text-gray-500 leading-relaxed">
                    Passionate about innovation, we continuously adapt to new
                    trends to ensure our clients stay ahead in the digital
                    landscape.
                  </p>

                  {/* STATS */}
                  <div className="flex gap-10 mt-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white">5+</h3>
                      <p className="text-gray-500 text-sm">Years Experience</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">50+</h3>
                      <p className="text-gray-500 text-sm">Projects</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">20+</h3>
                      <p className="text-gray-500 text-sm">Clients</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT BIG TEXT */}
                <div className="flex items-center justify-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-center">
                    <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent">
                      WEO Infotech
                    </span>
                    <br />
                    <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold">
                      PVT LTD
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </ElectricBorder>
          <ElectricBorder
            color="red"
            speed={1}
            chaos={0.12}
            thickness={4}
            style={{ borderRadius: 16 }}
          >
            <div className="bg-black text-white py-24 px-6 md:px-16">
              <div className="max-w-7xl mx-auto flex gap-12 items-center">
                {/* LEFT CONTENT */}
                <div>
                  <p className="text-sm tracking-widest text-red-500 mb-4">
                    DISCOVERY
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    About <span className="text-red-500">The Company</span>
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    We specialize in building modern, scalable web applications
                    with a strong focus on performance and user experience. Our
                    team delivers cutting-edge solutions using the latest
                    technologies like React, Next.js, and Tailwind CSS.
                  </p>

                  <p className="text-gray-500 leading-relaxed">
                    Passionate about innovation, we continuously adapt to new
                    trends to ensure our clients stay ahead in the digital
                    landscape.
                  </p>

                  {/* STATS */}
                  <div className="flex gap-10 mt-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white">5+</h3>
                      <p className="text-gray-500 text-sm">Years Experience</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">50+</h3>
                      <p className="text-gray-500 text-sm">Projects</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">20+</h3>
                      <p className="text-gray-500 text-sm">Clients</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT BIG TEXT */}
                <div className="flex items-center justify-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-center">
                    <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent">
                      WEO Infotech
                    </span>
                    <br />
                    <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold">
                      PVT LTD
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </ElectricBorder>
          <ElectricBorder
            color="red"
            speed={1}
            chaos={0.12}
            thickness={4}
            style={{ borderRadius: 16 }}
          >
            <div className="bg-black text-white py-24 px-6 md:px-16">
              <div className="max-w-7xl mx-auto flex flex-row-reverse gap-12 items-center">
                {/* LEFT CONTENT */}
                <div>
                  <p className="text-sm tracking-widest text-red-500 mb-4">
                    DISCOVERY
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    About <span className="text-red-500">The Company</span>
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    We specialize in building modern, scalable web applications
                    with a strong focus on performance and user experience. Our
                    team delivers cutting-edge solutions using the latest
                    technologies like React, Next.js, and Tailwind CSS.
                  </p>

                  <p className="text-gray-500 leading-relaxed">
                    Passionate about innovation, we continuously adapt to new
                    trends to ensure our clients stay ahead in the digital
                    landscape.
                  </p>

                  {/* STATS */}
                  <div className="flex gap-10 mt-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white">5+</h3>
                      <p className="text-gray-500 text-sm">Years Experience</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">50+</h3>
                      <p className="text-gray-500 text-sm">Projects</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">20+</h3>
                      <p className="text-gray-500 text-sm">Clients</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT BIG TEXT */}
                <div className="flex items-center justify-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-center">
                    <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent">
                      WEO Infotech
                    </span>
                    <br />
                    <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold">
                      PVT LTD
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </ElectricBorder>
          <ElectricBorder
            color="red"
            speed={1}
            chaos={0.12}
            thickness={4}
            style={{ borderRadius: 16 }}
          >
            <div className="bg-black text-white py-24 px-6 md:px-16">
              <div className="max-w-7xl mx-auto flex gap-12 items-center">
                {/* LEFT CONTENT */}
                <div>
                  <p className="text-sm tracking-widest text-red-500 mb-4">
                    DISCOVERY
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    About <span className="text-red-500">The Company</span>
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    We specialize in building modern, scalable web applications
                    with a strong focus on performance and user experience. Our
                    team delivers cutting-edge solutions using the latest
                    technologies like React, Next.js, and Tailwind CSS.
                  </p>

                  <p className="text-gray-500 leading-relaxed">
                    Passionate about innovation, we continuously adapt to new
                    trends to ensure our clients stay ahead in the digital
                    landscape.
                  </p>

                  {/* STATS */}
                  <div className="flex gap-10 mt-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white">5+</h3>
                      <p className="text-gray-500 text-sm">Years Experience</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">50+</h3>
                      <p className="text-gray-500 text-sm">Projects</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">20+</h3>
                      <p className="text-gray-500 text-sm">Clients</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT BIG TEXT */}
                <div className="flex items-center justify-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-center">
                    <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent">
                      WEO Infotech
                    </span>
                    <br />
                    <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold">
                      PVT LTD
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </ElectricBorder>
        </ScrollStack>
      </div>
    </section>
  );
}
