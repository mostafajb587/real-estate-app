import Awards from "../components/Awards";
import HeroSection from "../components/HeroSection";
import Properties from "../components/Properties";
import PropertyGrid from "../components/PropertyGrid";
import Location from "../components/Location";
import FeaturedAgents from "../components/FeaturedAgents ";
import SelectPackage from "../components/SelectPackage";
import AnimatedSection from "../components/AnimatedSection";

const HomePage = () => {
  // throw new Error("there is error");
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <div className="h-10"></div>

      <AnimatedSection>
        <Properties />
      </AnimatedSection>

      <div className="h-10"></div>

      <AnimatedSection>
        <PropertyGrid />
      </AnimatedSection>

      <div className="h-10"></div>

      <AnimatedSection>
        <Awards />
      </AnimatedSection>

      <div className="h-10"></div>

      <AnimatedSection>
        <Location />
      </AnimatedSection>

      <div className="h-10"></div>

      <AnimatedSection>
        <FeaturedAgents />
      </AnimatedSection>

      <div className="h-10"></div>

      <AnimatedSection>
        <SelectPackage />
      </AnimatedSection>
    </>
  );
};

export default HomePage;
