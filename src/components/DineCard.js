export default function DineCard({ restData }) {
    const info = restData?.info;

    const imageUrl =
        "https://media-assets.swiggy.com/swiggy/image/upload/" +
        info?.mediaFiles?.[0]?.url;

    const cuisines = info?.cuisines?.join(" • ");

    const mainOffer =
        info?.offerInfoV3?.vendorOffer?.title +
        " " +
        info?.offerInfoV3?.vendorOffer?.subtitle;

    const moreText = info?.offerInfoV3?.vendorOffer?.subtext;

    const bankOffer =
        info?.customerOffer?.infos?.[0]?.description;

    return (
        <a href={restData?.cta?.link} target="_blank" rel="noreferrer">
            <div className="w-90 rounded-2xl overflow-hidden shadow-md bg-white m-2">

                {/* Image */}
                <div className="relative h-52">
                    <img
                        src={imageUrl}
                        className="w-full h-full object-cover"
                    />

                    {/* Name */}
                    <div className="absolute bottom-3 left-3 text-white text-xl font-bold drop-shadow">
                        {info?.name}
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-3 right-3 bg-green-600 text-white text-sm px-2 py-1 rounded-lg font-semibold">
                        ★ {info?.rating?.value}
                    </div>
                </div>

                {/* Body */}
                <div className="p-4 space-y-2">

                    {/* Cuisine + Cost */}
                    <div className="text-gray-600 text-sm flex justify-between">
                        <span>{cuisines}</span>
                        <span>{info?.costForTwo}</span>
                    </div>

                    {/* Address + Distance */}
                    <div className="text-gray-500 text-sm flex justify-between">
                        <span>{info?.locationInfo?.formattedAddress}</span>
                        <span>{info?.locationInfo?.distanceString}</span>
                    </div>

                    {/* Highlight pill */}
                    <div className="inline-block text-sm px-3 py-1 rounded-lg bg-gray-100 text-gray-700">
                        Table booking
                    </div>

                    {/* Main offer */}
                    <div className="bg-green-600 text-white rounded-lg px-3 py-2 text-sm font-semibold flex justify-between">
                        <span>{mainOffer}</span>
                        <span>{moreText}</span>
                    </div>

                    {/* Bank offer */}
                    <div className="bg-green-100 text-green-800 rounded-lg px-3 py-2 text-sm">
                        {bankOffer}
                    </div>

                </div>
            </div>
        </a>
    );
}
