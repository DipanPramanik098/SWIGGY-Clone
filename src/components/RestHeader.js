import { ShoppingCart, User, Search, HelpCircle, Briefcase } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function RestHeader() {
    const counter = useSelector(state => state.cartslice.count)
    return (
        <div className="w-full bg-white shadow-sm border-b">
            <div className="w-[90%] mx-auto flex items-center justify-between h-20">

                {/* Left Section */}
                <div className="flex items-center gap-6">

                    {/* Logo */}
                    <div className="bg-orange-500 p-3 rounded-xl cursor-pointer">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                            alt="Logo"
                            className="h-6 w-auto object-contain"
                        />
                    </div>


                    {/* Location */}
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span className="font-semibold border-b-2 border-black">
                            Other
                        </span>
                        <span className="text-orange-500 text-sm">▼</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-8 text-gray-700 font-medium">

                    <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                        <Briefcase size={18} />
                        <span>Swiggy Corporate</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                        <Search size={18} />
                        <span>Search</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition relative">
                        <span>Offers</span>
                        <span className="absolute -top-3 -right-5 text-xs text-orange-500 font-bold">
                            NEW
                        </span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                        <HelpCircle size={18} />
                        <span>Help</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                        <User size={18} />
                        <span>Sign In</span>
                    </div>

                    <Link to={"/Checkout"}>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
                            <ShoppingCart size={18} />
                            <span>Cart</span>
                            <span className="bg-gray-200 px-2 rounded text-sm">{counter}</span>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default RestHeader;
