"use client"
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Navbar_2 from "./Components/Navbae_2";
import Hero_1 from "./Components/hero_1";
import Hero_2 from "./Components/Hero_2";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Navbar_2/>
      <Hero_1/>
      <Hero_2/>
    </>
  );
}
