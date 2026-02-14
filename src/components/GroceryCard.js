export default function GroceryCard({ grocery }) {
    return (
        <>
            <a href={grocery?.action?.link}>
                <img className="w-40 h-40 object-cover gap-3" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + grocery?.imageId}></img>
                <h2 className=" text-center mb-2">{grocery?.action?.text}</h2>
            </a>
        </>
    )
}