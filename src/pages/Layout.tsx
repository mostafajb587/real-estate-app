import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuestionsSection from "../components/QuestionsSection";
// import HeroSection from "../components/HeroSection";
// import Footer from "../components/Footer";
// import Properties from "../components/Properties";
// import PropertyGrid from "../components/PropertyGrid";
// import Awards from "../components/Awards";
// import ExploreByLocation from "../components/Location";
// import FeaturedAgents from "../components/FeaturedAgents ";
// import SelectPackage from "../components/SelectPackage";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <QuestionsSection></QuestionsSection>
      <Footer></Footer>
    </>
  );
};

export default Layout;
