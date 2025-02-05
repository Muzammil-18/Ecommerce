import { Catamaran, Kreon } from "next/font/google";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

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
      <section className="hidden lg:flex  h-[584px] justify-center w-full bg-[#2A254B] relative  ">
        <div className="w-2/3 flex flex-col ">
          <div className=" h-[81px] relative top-[363px] left-[40px]  ">
            <p className={`${satoshi.className} text-base`}>
              A new era with eco-friendly furniture with Avelon, the French
              luxury retail brand
            </p>
            <p className={`${satoshi.className} text-base`}>
              with nice fonts, testeful colors and a beautiful way to display
              things digitally
            </p>
            <p className={`${satoshi.className} text-base`}>
              using modern web technologies
            </p>
            
          </div>
          <div className=" h-[187px] text-white relative  left-[40px] pt-1 space-y-4">
            <p className={`text-4xl font-thin ${roboto.className}`}>
              The Furniture Brand For The
            </p>
            <p className={`text-4xl font-thin ${roboto.className}`}>
              Future, with timeless designsrt
            </p>

            <Link href="/products">
            <Button
              height={56}
              width={170}
              bgColor="rgba(249, 249, 249, 0.15)"
              textColor="white"
              mtop="30px"
              text="View Collection"
            />
           </Link> 
          </div>
        </div>
        <div className=" w-1/3 relative ">
          <Image
            src="/assets/img1.jpg"
            alt="Hero Image Here"
            width={520}
            height={300}
            className="absolute h-full right-0"
          ></Image>
        </div>
      </section>

      <section className="flex flex-col lg:hidden bg-[#2A254B] w-full  h-[502px]">
        <div className="w-[342px] h-[135px] relative top-[40px]  space-y-3 mx-auto text-white  font-bold">
          <p className={`${roboto.className} text-4xl`}>The Furniture brand</p>
          <p className={`${roboto.className} text-4xl`}>for the future, with</p>
          <p className={`${roboto.className} text-4xl`}>timeless designs</p>
        </div>
        <div className="w-[342px] h-[223px] relative top-[135px]  mx-auto text-white gap-8">
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
          <Link href="/products">
          <Button
            height={56}
            width={325}
            bgColor="rgba(249, 249, 249, 0.15)"
            textColor="white"
            mtop="17px"
            text="View Collection"
          />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero_1;
