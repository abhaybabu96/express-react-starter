import Particles from "./Galaxy";
import FuzzyText from "./Shuffle";
import InfiniteMenu from "./InfiniteMenu";

const items = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    title: "Truly Beauty",
    description: "Fully customized skin care products store , which is speed is 192s.",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

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
        <div style={{ height: "600px", position: "relative" , background: "transparent" }}>
          <InfiniteMenu items={items} scale={1.2} />
        </div>
      </div>
    </section>
  );
}
