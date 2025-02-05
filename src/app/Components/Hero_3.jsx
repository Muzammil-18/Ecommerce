import { Lora } from "next/font/google";
import New_cera_card from "./New_ceramics_card";
import Button from "./Button";
import Link from "next/link";



const lora = Lora({
  weight: "400",
  subsets: ["latin"],
});

const products=[
  {id:"1", img_src:"/assets/Parent.png", title:"The Dandy Chair", price:"£250"},
  {id:"2", img_src:"/assets/Parent2.png", title:"Rustio Vase Set", price:"£155"},
  {id:"3", img_src:"/assets/Parent3.png", title:"The Silky Vase", price:"£125"},
  {id:"4", img_src:"/assets/Parent4.png", title:"The Lucy Lamp", price:"£399"}
]

const Hero_3 = () => {
  
  return (
    <>


        <div className="w-full flex flex-wrap justify-around  mt-3 gap-4">
        {products.map((product)=>(
            <div className="ml-3" key={product.id}>
              <Link href={`/products/${product.id}`}>
                <New_cera_card img_src={product.img_src} title={product.title} price={product.price} />              
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center  mt-3 w-full">
          <Link href="/products">
            <button className="h-[56px] w-[170px] text-black border-2 border-solid border-black bg-[#F9F9F9] font-bold">View Collection</button>
            </Link>
        </div>
    </>
  )
}

export default Hero_3
