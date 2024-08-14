import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import {Toaster} from "react-hot-toast"
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
      <Toaster toastOptions={{
        duration: 1000,
      }}/>
    </>
  );
};

export default MainLayout;
