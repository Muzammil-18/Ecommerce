import { Taviraj, Quattrocento_Sans } from "next/font/google";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";

const taviraj = Taviraj({
  weight: "400",
  subsets: ["latin"],
});
const quat = Quattrocento_Sans({
  weight: "400",
  subsets: ["latin"],
});

const features = [
  {
    icon: <TbTruckDelivery size={20} />,
    title: "Next Day as Standard",
    description: ["Order before 3 pm and get your order", "the next day as standard"],
  },
  {
    icon: <FaRegCheckCircle size={18} />,
    title: "Made by true artisans",
    description: ["Handmade crafted goods made with", "real passion and craftsmanship"],
  },
  {
    icon: <GoCreditCard size={20} />,
    title: "Unbeatable Prices",
    description: ["For our materials and quality you", "won't find better prices anywhere"],
  },
  {
    icon: <LuSprout size={20} />,
    title: "Recycled Packaging",
    description: ["We use 100% recycled packaging to", "ensure our footprint is manageable"],
  },
];

const Hero_2 = () => {
  return (
    <>
      <section className="flex flex-col mt-1 max-w-[1440px] h-fit">
        <div className="hidden md:flex justify-center items-center h-[34px] mt-10">
          <p className={`${taviraj.className} text-2xl`}>
            What makes our brand different
          </p>
        </div>
        <div className="flex flex-col md:hidden space-y-1 font-extrabold mt-5px">
          <div
            className={`${taviraj.className} text-xl flex justify-center top-[15px] relative`}
          >
            What makes Our Brand
          </div>
          <div
            className={`${taviraj.className} text-xl flex justify-center top-[10px] relative`}
          >
            Different
          </div>
        </div>

        <div className="flex flex-wrap justify-around mt-6 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="md:min-w-[270px] min-w-[370px] h-[124px] bg-white border-2 border-solid border-purple-400"
            >
              <div className="flex flex-col p-[8px]">
                {feature.icon}
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  {feature.title}
                </h2>
                {feature.description.map((line, idx) => (
                  <p key={idx} className={`text-gray-700 ${quat.className}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero_2;
