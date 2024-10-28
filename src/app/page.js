import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ServiceSection from "./components/Flex-Section";
import Title from "./components/Title";
import StatsSection from "./components/Timer";
import Details from "./components/Details";
import TailerdBot from "./components/TailerdBot";
import Testmonial from "./components/Testmonial";
import Contact from "./components/Contact";

export default function Home() {
  return (
   <>
    <Header/>
    <HeroSection/>
    <Title/>
    <ServiceSection/>
    <ServiceSection/>
    <ServiceSection/>
    <StatsSection/>
    <p className="text-center text-lg font-bold text-blue-600 mt-8" >ABOUT</p>
    <Details/>
    <Details/>
    <TailerdBot/>
    <Testmonial/>
    <Contact/>
    <footer className="text-center font-bold mb-8" >© 2022 By Yanthraa Information Systems</footer>
    
   </>
  );
}
