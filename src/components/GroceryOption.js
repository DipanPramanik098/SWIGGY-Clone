import Grocery from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){
    return(
        <div className="container mx-auto mt-20 mb-20">
            <h1 className=" font-bold text-3xl mb-10">Shop groceries on Instamart</h1>
            <div className="grid grid-rows-2 grid-flow-col
        gap-5
        overflow-x-auto overflow-y-hidden
        auto-cols-max">
                {
                    Grocery.map((grocery)=> <GroceryCard key={grocery.id} grocery={grocery}></GroceryCard>)
                }
            </div>
        </div>
    )
}