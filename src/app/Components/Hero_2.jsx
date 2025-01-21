import { Taviraj } from 'next/font/google'

const taviraj= Taviraj({
  weight: '400',
  subsets: ['latin']
})

const Hero_2 = () => {
  return (
    <>
    <div className='hidden md:flex justify-center items-center mt-11 overflow-clip'>
        <p className={`${taviraj.className} text-2xl`}>What makes our brand different </p>
    </div>
    <p className='md:hidden flex m-0 p-0 overflow-clip'>ccccc</p>
    
    </>
  )
}

export default Hero_2