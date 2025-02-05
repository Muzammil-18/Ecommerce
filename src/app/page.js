import { Lora } from "next/font/google";
import Navbar from "./Components/Navbar";
import Navbar_2 from "./Components/Navbae_2";
import Hero_1 from "./Components/hero_1";
import Hero_2 from "./Components/Hero_2";
import Hero_3 from "./Components/Hero_3";
import Hero_4 from "./Components/Hero_4";
import Hero_5 from "./Components/Hero_5";
import Footer from "./Components/Footer";

const lora = Lora({
  weight: "600",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar/>
      <Navbar_2/>
      <Hero_1/>
      <Hero_2/>
      <div className="w-full mt-5 ">
            <p className={`${lora.className} text-black text-2xl ml-3 font-extrabold`}>New Ceramics</p>
      </div>
      <Hero_3/>
      <Hero_4/>
      <Hero_5/>
      <Footer/>
    </>
  );
}
