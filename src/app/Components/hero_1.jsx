import { Catamaran, Kreon } from "next/font/google";
import Button from "./Button";
import Image from "next/image";

const roboto = Catamaran({
  weight: "400",
  subsets: ["latin"],
});

const satoshi = Kreon({
  weight: "400",
  subsets: ["latin"],
});

const Hero_1 = () => {
  return (
    <>
      <section className="hidden md:flex max-w-[1280px] h-[584px] justify-center w-[90%] mx-10 bg-[#2A254B] ">
        <div className="flex flex-col ">
          <div className="w-[602px] h-[81px] relative top-[443px] left-[60px] space-y-4 text-white">
            <p className={`${satoshi.className} text-lg`}>
              A new era with eco-friendly furniture with Avelon, the French
              luxury retail brand
            </p>
            <p className={`${satoshi.className} text-lg`}>
              with nice fonts, testeful colors and a beautiful way to display
              things digitally
            </p>
            <p className={`${satoshi.className} text-lg`}>
              using modern web technologies
            </p>
          </div>
          <div className=" w-[513px] h-[187px] text-white relative  left-[60px] pt-10 pl-10 space-y-5">
            <p className={`text-4xl font-thin ${roboto.className}`}>
              The Furniture Brand For The
            </p>
            <p className={`text-4xl font-thin ${roboto.className}`}>
              Future, with timeless designs
            </p>
            <Button
              height={56}
              width={170}
              bgColor="rgba(249, 249, 249, 0.15)"
              textColor="white"
              mtop="40px"
              text="View Collection"
            />
          </div>
        </div>
        <div className=" w-full relative ">
          <Image
            src="/assets/img1.jpg"
            alt="Hero Image Here"
            width={520}
            height={300}
            className="absolute h-full right-0"
          ></Image>
        </div>
      </section>

      <section className="flex flex-col md:hidden bg-[#2A254B] w-full h-[502px]">
        <div className="w-[342px] h-[135px] relative top-[40px] left-[24px] space-y-3 text-white  font-bold">
          <p className={`${roboto.className} text-4xl`}>The Furniture brand</p>
          <p className={`${roboto.className} text-4xl`}>for the future, with</p>
          <p className={`${roboto.className} text-4xl`}>timeless designs</p>
        </div>
        <div className="w-[342px] h-[223px] relative top-[135px] left-[24px] text-white gap-8">
          <p className={`${satoshi.className} text-md`}>
            A new era with eco-friendly furniture with
          </p>
          <p className={`${satoshi.className} text-md`}>
            Avelon, the French luxury retail brand
          </p>
          <p className={`${satoshi.className} text-md`}>
            with nice fonts, testeful colors and a
          </p>
          <p className={`${satoshi.className} text-md`}>
            with nice fonts, testeful colors and a beautiful way to display
            things digitally
          </p>
          <p className={`${satoshi.className} text-md`}>
            using modern web technologies
          </p>
          <Button
            height={56}
            width={325}
            bgColor="rgba(249, 249, 249, 0.15)"
            textColor="white"
            mtop="17px"
            text="View Collection"
          />
        </div>
      </section>
    </>
  );
};

export default Hero_1;
