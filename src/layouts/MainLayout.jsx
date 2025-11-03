import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

function MainLayout() {
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
