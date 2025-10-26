import HomeSwitcher from "./home-switcher";
import AlternativeHomePage from '../components/AlternativeHomePage';
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AlternativeHomePage />
    </>
  );
}
