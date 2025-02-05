
import Image from "next/image";
import { Mulish, Varela_Round } from "next/font/google";
import Button from "./Button";
import Link from "next/link";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
});

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

const Hero_4 = () => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-5 mt-7 mx-3 md:mx-5">
      <div className="md:min-w-[530px] max-w-[342px] w-full h-[281px] md:h-[370px] bg-[#2A254B] flex flex-col text-white p-5 md:p-8">
        <h2 className={`${varela.className} text-2xl md:text-3xl mb-3 md:my-6`}>
          It started with a small idea
        </h2>
        <p className={`${mulish.className} text-sm md:text-lg`}>
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <div className="mt-auto">
          <Link href="/products">
          <Button
            height={56}
            width="100%"
            bgColor="rgba(249, 249, 249, 0.15)"
            textColor="white"
            text="View Collection"
          />
          </Link>
        </div>
      </div>

      {/* Right Image Block */}
      <div className="md:min-w-[530px] max-w-[342px] w-full h-[281px] md:h-[370px] relative">
        <Image
          src="/assets/ImageBlock.png"
          alt="Image Block"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Hero_4;
