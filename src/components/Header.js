import { ChevronDown, MapPin, Search, MoveUpRight } from "lucide-react";
import { Link } from "react-router";

function Header() {
    return (
        <header className="bg-[#ff5200]">
            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12 cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                <div className=" text-white text-base font-bold flex gap-10 items-center">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/food/#!/login" target="_blank">Partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl flex gap-2" href="#" target="_blank">Get the App <MoveUpRight /></a>
                    <a className="border border-black py-3 px-4 rounded-2xl bg-black" href="#" target="_blank">Sign in</a>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-5xl text-white font-bold max-w-[60%] container mx-auto text-center">
                    Order food & groceries. Discover <br /> best restaurants. Swiggy it!
                </div>
                <div className="max-w-[50%] container mx-auto flex gap-5 mt-10">

                    {/* Location Input — 40% */}
                    <div className="relative w-[30%]">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ff5200]" />

                        <input
                            type="text"
                            placeholder="Enter your delivery location"
                            className="w-full pl-10 pr-10 py-3 px-6 rounded-lg border border-white bg-white shadow-sm focus:outline-none font-bold"
                        />

                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    </div>

                    {/* Search Input — 55% */}
                    <div className="relative w-[55%]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                        <input
                            type="text"
                            placeholder="Search for restaurant, item or more"
                            className="w-full pl-10 pr-4 py-3 px-6 rounded-lg border border-white bg-white shadow-sm focus:outline-none font-bold"
                        />
                    </div>

                </div>

            </div>

            <div className="max-w-[80%] container mx-auto flex">
                <Link to="/resturant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </a>
            </div>
        </header>
    )
}
export default Header;