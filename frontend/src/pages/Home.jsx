import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider"; 

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <HomeSlider/>
      <Footer />
    </div>
  );
}
