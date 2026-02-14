import { Link } from "react-router"

export default function RestCard({ restInfo }) {
    return (
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
            <div className="w-70 cursor-pointer group">

                {/* Image */}
                <div className="overflow-hidden rounded-xl shadow-md">
                    <img
                        className="w-70 h-45 object-cover rounded-xl
                               transition duration-300
                               group-hover:scale-95"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/"
                            + restInfo.info.cloudinaryImageId
                        }
                    />
                </div>

                {/* Text Block */}
                <div className="mt-3 space-y-1">

                    {/* Name */}
                    <div className="font-semibold text-lg text-gray-900">
                        {restInfo?.info?.name}
                    </div>

                    {/* Rating + Time */}
                    <div className="flex items-center gap-2 text-sm font-medium">

                        {/* green star */}
                        <span className="bg-green-600 text-white px-2 py-[2px] rounded-md text-xs">
                            ★ {restInfo?.info?.avgRating}
                        </span>

                        <span className="text-gray-700">
                            {restInfo?.info?.sla?.slaString}
                        </span>
                    </div>

                    {/* Cuisines */}
                    <div className="text-gray-500 text-sm">
                        {restInfo?.info?.cuisines.join(", ")}
                    </div>

                </div>

            </div>
        </Link>
    )
}
