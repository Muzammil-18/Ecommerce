import Image from "next/image"
import {  Prompt,Taviraj } from "next/font/google";

const barlow = Prompt({
  weight: "400",
  subsets: ["latin"],
});
const taviraj = Taviraj({
    weight: "400",
    subsets: ["latin"],
  });

const New_cera_card = ({img_src, title, price}) => {
  return (
    <>
    <div className='flex flex-col min-w-[305px] border-1 border-solid h-fit border-black'>
        <Image src={img_src} alt="New Ceramics Product Here" width={275} height={275} />
        <p className={`${barlow.className} text-md font-semibold text-gray-900 pt-2`}>{title}</p>
        <p className={`${taviraj.className} text-gray-800 text-md `} > {price}</p>
    </div>
    </>
  )
}

export default New_cera_card