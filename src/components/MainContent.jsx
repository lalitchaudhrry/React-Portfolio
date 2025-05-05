import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from "react-router"

const MainContent = () => {


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
     <Outlet/>
        </main>
      <Footer/>
      </div>
    
    </>
     
  )
}

export default MainContent
