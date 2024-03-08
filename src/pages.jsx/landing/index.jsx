import Header from "../../components/home/Header";
import HeroSection from "../../components/home/HeroSection";
import Avatars from "../../components/home/Avatars";
import MediaLogos from "../../components/home/MediaLogos";
import LastSection from "../../components/home/LastSection";
import ResponsiveCards from "../../components/ui/ResponsiveCards";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className=" hidden sm:flex justify-center">
        <Avatars />
      </div>
      <MediaLogos />
      <div className=" flex justify-center relative top-14 sm:hidden">
        <Avatars />
      </div>
      <LastSection />
      <ResponsiveCards />
    </div>
  );
}

export default HomePage;
