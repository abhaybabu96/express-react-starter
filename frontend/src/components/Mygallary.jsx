import Particles from "./Galaxy";
import FuzzyText from "./Shuffle";
import DomeGallery from "./DomeGallery";

export default function About() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          Colors={["#DAA520"]}
          particleCount={500}
          particleSpread={20}
          speed={0.05}
          particleBaseSize={100}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="relative z-10 text-center px-6 w-full py-20">
        <h3 className="flex justify-center bg-clip-text text-transparent mt-30 mb-30">
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
            Sucessful Missons
          </FuzzyText>
        </h3>
        <div style={{ width: "100vw", height: "100vh" }}>
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale
          />
        </div>
      </div>
    </section>
  );
}
