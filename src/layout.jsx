import Footer from "./components/footer/footer";
import MobileNavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";
import "./App.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <MobileNavBar />
      <div className="content-wrapper">
        <SideBar />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
