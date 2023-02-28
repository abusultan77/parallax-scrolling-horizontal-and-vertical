// import logo from './logo.svg';
import '../../App.scss';
import React, { useState, useEffect } from "react";
import Banner from './main-banner/Banner.js';
import Navbar from './header/Navbar';
import Bannersec from './main-bannersec/Bannersec';
import Roadmap from './roadmap/Roadmap';
import Faqs from './faqs/Faqs';
import Aos from 'aos';



function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // useEffect (() => {
  //   const wow = new WOW.WOW();
  //   wow.init();
  // },[])

  return (
    <>
      {/* <Navbar /> */}
      <Banner />
 <Bannersec /> 
      {/* <Roadmap/>
      <Faqs />  */}

    </>
  );
}

export default Landing;