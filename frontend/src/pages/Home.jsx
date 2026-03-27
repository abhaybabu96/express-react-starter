import Hero from "../components/Hero";
import Features from "../components/Features";
import HomeSlider from "../components/HomeSlider";
import Bestseller from "../components/Bestseller";
import HeroSection from "../components/HeroSection";
import SplitText from "../components/SplitText";
import LiquidEther from "../components/LiquidEther";
import Herotext from "../components/Herotext";
import About from "../components/About";
import ScrollStackComponent from "../components/stacks"
import Projects from "../components/Projects"
import Mygallary from "../components/Mygallary"

//import Particles from "../components/Galaxy";

export default function Home() {
  return (
    <div>
      <LiquidEther />
      <Herotext />
      <ScrollStackComponent/>
      <About />
      <Projects />
      {/* <Mygallary/> */}
      <Hero />
      <Bestseller />
      <HeroSection
        title={
          <h2>
            <SplitText text="Natural Skincare Collection" />
          </h2>
        }
        subtitle={
          <p>
            Discover gentle, plant-based formulas that hydrate and protect.
            Perfect for daily care and all skin types.
          </p>
        }
        image="https://cdn.shopify.com/s/files/1/0734/2525/6670/files/FRAGRANCE_done_V1_3a3636db-c4f1-463e-b9cb-ef8d62d88e4f.jpg"
        ctaText="Shop Collection"
        ctaHref="/collection/459763450078?name=Body%20Butters"
        reverse={false} // image left, text right
        imgAlt="Skincare products on table"
      />
      <HeroSection
        title={
          <SplitText
            text="New Arrivals — Hair Care"
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
        }
        subtitle={
          <p>
            Lightweight formulas for stronger, shinier hair. Free shipping on
            orders above ₹1,499.
          </p>
        }
        image="https://cdn.shopify.com/s/files/1/0734/2525/6670/files/FRAGANCE_0659523b-c541-479e-9429-9c2db9984718.jpg"
        ctaText="Explore Hair Care"
        ctaHref="/collection/459763351774?name=Body%20Serums"
        reverse={true} // image right, text left
        imgAlt="Hair care bottles with green leaves"
      />
      <HomeSlider />
      <Features />
    </div>
  );
}
