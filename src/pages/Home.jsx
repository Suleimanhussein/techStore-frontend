import { Link } from "react-router-dom";
// import Products from "./Products"; // Ensure this is correctly imported
import homeImg from "../assets/homeImg.png";
import { BiAward } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { WiTime3 } from "react-icons/wi";
import Products from "./ProductPages";

function Home() {
    return (
        <>
            <div className="">
                {/* Hero Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-[#be7f03] to-90% to-white px-5 md:px-9 py-10">
                    <div className="mt-10 md:mt-20 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold capitalize">Welcome to TechStore</h1>
                        <p className="m-5 md:m-9 font-thin">Check out our latest products below:</p>
                        <Link to="/products" className="inline-block bg-[#0a363a] text-white py-3 px-5 rounded">
                            View More Products
                        </Link>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img className="w-[250px] md:w-[400px] mt-5 md:mt-10" src={homeImg} alt="Home" />
                    </div>
                </div>

                {/* Feature Section */}
                <div className="p-5 md:p-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="rounded-2xl flex gap-3 items-center shadow-lg bg-amber-50 px-5 py-5 opacity-65">
                            <FaShippingFast className="text-3xl md:text-4xl" />
                            <div>
                                <p className="font-black">Free Shipping</p>
                                <span>On orders over $50</span>
                            </div>
                        </div>
                        <div className="rounded-2xl flex gap-3 items-center shadow-lg bg-white px-5 py-5 opacity-65">
                            <BiAward className="text-3xl md:text-4xl" />
                            <div>
                                <p className="font-black">Warranty</p>
                                <span>1-year minimum</span>
                            </div>
                        </div>
                        <div className="rounded-2xl flex gap-3 items-center shadow-lg bg-white px-5 py-5 opacity-65">
                            <WiTime3 className="text-3xl md:text-4xl" />
                            <div>
                                <p className="font-black">24/7 Support</p>
                                <span>Always available</span>
                            </div>
                        </div>
                        <div className="rounded-2xl flex gap-3 items-center shadow-lg bg-white px-5 py-5 opacity-65">
                            <BiAward className="text-3xl md:text-4xl" />
                            <div>
                                <p className="font-black">Fast Delivery</p>
                                <span>2-3 business days</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Section */}
                <Products showButton={true} />
            </div>
        </>
    );
}

export default Home;
