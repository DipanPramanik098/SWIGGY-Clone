export default function Shimmer(){
    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-4 gap-6">

                {[...Array(8)].map((_, i) => (
                    <div key={i} className="animate-pulse">

                        {/* image block */}
                        <div className="bg-gray-300 h-45 rounded-xl"></div>

                        {/* text blocks */}
                        <div className="mt-3 space-y-2">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}
