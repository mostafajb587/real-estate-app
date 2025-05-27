import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuestionsSection from "../components/QuestionsSection";

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
