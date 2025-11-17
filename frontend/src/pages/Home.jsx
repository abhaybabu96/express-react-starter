import Hero from "../components/Hero";
import Features from "../components/Features";
import HomeSlider from "../components/HomeSlider"; 
import Bestseller from "../components/Bestseller";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bestseller/>
      <HomeSlider/>
      <Features />
    </div>
  );
}
