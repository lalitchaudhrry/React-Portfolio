import React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

const MainContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MainContent;
