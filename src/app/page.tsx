import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Offers from "@/components/Offers";
import Reviews from "@/components/Reviews";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Offers />
        <Reviews />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}