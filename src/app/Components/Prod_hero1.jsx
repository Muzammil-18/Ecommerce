import { Comfortaa, Titillium_Web } from "next/font/google";
import { FaChevronDown } from "react-icons/fa";

const c = Comfortaa({
  weight: "600",
  subsets: ["latin"],
});
const t = Titillium_Web({
  weight: "600",
  subsets: ["latin"],
});

const Prod_hero1 = () => {
  return (
    <>
      <section
        className="w-full h-[209px] bg-center bg-cover relative"
        style={{
          backgroundImage: "url('/assets/product_bgimg1.jpg')"
        }}
      >
        <div
          className="
      absolute top-[123px] 
      left-1/2 -translate-x-1/2 
      md:left-[80px] md:translate-x-0
    "
        >
          <h1 className={`${c.className} text-4xl font-bold text-white`}>
            All Products
          </h1>
        </div>
      </section>

      <section className="w-full md:flex hidden h-16   items-center justify-between p-1 relative">
        <div className="flex space-x-6">
          <button className={`${t.className} ml-[14px] flex relative`}>
            Category <FaChevronDown className="ml-[6px] mt-[6px]" />
          </button>
          <button className={`${t.className} flex relative`}>
            Product Type <FaChevronDown className="ml-[6px] mt-[6px]" />
          </button>
          <button className={`${t.className} flex relative`}>
            Price <FaChevronDown className="ml-[6px] mt-[6px]" />
          </button>
          <button className={`${t.className} flex relative`}>
            Brand <FaChevronDown className="ml-[6px] mt-[6px]" />
          </button>
        </div>
        <div className="flex space-x-4">
          <p className={`${t.className} flex relative right-5`}>Sorting By:</p>
          <button className={`${t.className} flex relative right-4`}>
            Date Added <FaChevronDown className="ml-[6px] mt-[6px]" />
          </button>
        </div>
      </section>

      <section className="flex justify-center items-center md:hidden w-full h-[96px]  gap-2 my-[6px]">
        <button className={`${t.className} flex justify-center items-center bg-[#F1F1F1] h-[56px] w-1/2 mx-12 text-center`}>
          Filters <FaChevronDown className="ml-2 mt-[2px]"/>
        </button>
        <button className={`${t.className} flex justify-center items-center bg-[#F1F1F1] h-[56px] w-1/2 mx-12 `}>
          Sorting <FaChevronDown className="ml-2 mt-[2px]"/>
        </button>

      </section>
    </>
  );
};

export default Prod_hero1;
