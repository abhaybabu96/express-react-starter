import Particles from "./Galaxy";
import FuzzyText from "./Shuffle";
import LogoLoop from "./LogoLoop";
import InfiniteMenu from "./InfiniteMenu";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiShopify,
  SiTailwindcss,
} from "react-icons/si";

//import DecryptedText from './DecryptedText';
//import RotatingText from "./Rotate";
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiShopify />,
    title: "Shopify",
    href: "https://www.shopify.com",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
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
        <h3 className="flex justify-center bg-clip-text text-transparent mt-30">
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
            Tech Stack
          </FuzzyText>
        </h3>
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
          className="mt-20"
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={false}
            fadeOutColor="#FF0000"
            ariaLabel="Technology partners"
            useCustomRender
            className=""
          />

          {/* Vertical loop with deceleration on hover */}
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="right"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            fadeOut={false}
            fadeOutColor="#FF0000"
            useCustomRender
            className=""
          />
        </div>
      </div>
    </section>
  );
}
