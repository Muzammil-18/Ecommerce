import React from 'react'
import Button from './Button'
import Link from 'next/link'



const Abouthero1 = () => {
  return (
    <>
    <section className='flex w-full flex-col md:flex-row md:h-[277px]'>
        <div className='w-1/2 bg-red-800'>
            <h1 className='text-center'>A Brand built on the love of craftsmanship,</h1>
            <h1>Quality and Outstanding customer service</h1>
        </div>
        <div className='w-1/2 bg-green-300'>
            <Link href="/products">
            <Button
              height={56}
              width={170}
              bgColor="#F9F9F9"
              textColor="black"
            //   mtop="30px"
              text="View Collection"
            />
           </Link> 
        </div>
    </section>
    </>
  )
}

export default Abouthero1