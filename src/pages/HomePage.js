import React from 'react'
import ViNav from '../components/ViNav';
import ServicesPageH from '../components/ServicePageH';
import AboutAreaH from '../components/AboutAreaH';
import ProjectAreaH from '../components/ProjectAreaH';
import CounterUpAreaH from '../components/CounterUpAreaH';
import BrandTopClientsH from '../components/BrandTopClientsH';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import TestimonialAreaH from '../components/TestimonialAreaH';
const HomePage = () => {

  


  return (
    <>
      
      <ViNav/>
      

    
      {/*=====================================*/}
      {/*=        Service Area Start         =*/}
      {/*=====================================*/}  
    <ServicesPageH/>
      {/*=====================================*/}
      {/*=        About Area Start         =*/}
      {/*=====================================*/}
      <AboutAreaH/>
      
      {/*=====================================*/}
      {/*=        Project Area Start         =*/}
      {/*=====================================*/}
      <ProjectAreaH/>

      
      {/*=====================================*/}
      {/*=        Counter Up Area Start      =*/}
      {/*=====================================*/}
      <CounterUpAreaH/>

      <TestimonialAreaH/>
      {/*=====================================*/}
      {/*=        Brand Area Start       	=*/}
      {/*=====================================*/}
      <BrandTopClientsH/>

      
      {/*=====================================*/}
      {/*=        Call To Actions Area Start       	=*/}
      {/*=====================================*/}
    <CallToAction/>

    
      {/*=====================================*/}
      {/*=        Footer Area Start       	=*/}
      {/*=====================================*/}

      <Footer/>
    </>
  )
}

export default HomePage

