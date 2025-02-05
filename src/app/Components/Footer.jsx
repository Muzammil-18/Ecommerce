import Link from "next/link";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";


const Footer= () => {
  const menuButtons= [
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Recently Viewed", href: "/recently-viewed" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Popular this week", href: "/popular" },
    { name: "All Products", href: "/all-products" },
  ];

  const categoryButtons = [
    { name: "Crockery", href: "/crockery" },
    { name: "Furniture", href: "/furniture" },
    { name: "Homeware", href: "/homeware" },
    { name: "Plant Pots", href: "/plant-pots" },
    { name: "Chairs", href: "/chairs" },
    { name: "Accessories", href: "/accessories" },
  ];

  const companyButtons = [
    { name: "About us", href: "/about" },
    { name: "Vacancies", href: "/vacancies" },
    { name: "Contact us", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Return Policy", href: "/return-policy" },
  ];

  return (
    <>
      <footer className="bg-[#2A254B] text-white py-8">
        <section className="  mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Menu Section */}
          <div className=" flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-3">Menu</h2>
            {menuButtons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className="text-gray-400 mb-2 font-medium hover:text-gray-200 "
              >
                {button.name}
              </Link>
            ))}
          </div>

          {/* Categories Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-3">Categories</h2>
            {categoryButtons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className="text-gray-400 mb-2 font-medium hover:text-gray-200 whitespace-nowrap"
              >
                {button.name}
              </Link>
            ))}
          </div>

          {/* Our Company Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-3">Our Company</h2>
            {companyButtons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className="text-gray-400 mb-2 font-medium hover:text-gray-200 whitespace-nowrap"
              >
                {button.name}
              </Link>
            ))}
          </div>

          {/* Mailing List Section */}
          <div className="text-sm relative flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-3">
              Join Our Mailing List
            </h2>
            <form className="flex flex-col sm:flex-row items-center sm:items-start">
              <input
                type="email"
                placeholder="your@gmail.com"
                className=" sm:w-2/3 bg-white text-black p-3 mb-3 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
              <button
                type="submit"
                className="bg-[#494465]  sm:w-1/3 text-white  px-5 py-3 hover:bg-[#3c3a4e] "
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
        <div>
            <div className="w-11/12 mx-auto">
            <div className="h-[1px] mt-5 bg-gray-500 w-full"></div>

            </div>
        </div>
        <div className="w-11/12 flex mt-8 text-center  mx-auto justify-between text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
          <div className="gap-x-3 flex md:text-xl text-md">
          <FaLinkedin/>
          <FaFacebookSquare/>
          <FaInstagram/>
          <FaSkype/>
          <FaTwitter/>
          <FaPinterest/>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;