
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import HomePage from "@/components/HomePage";
import FeaturesPage from '@/components/featurespage';
import AboutUs from '@/components/aboutus';
import WhyUs from '@/components/whyus';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePage />
      <FeaturesPage />
      <AboutUs />
      <WhyUs />
      <Footer />
    </>
  );
}
