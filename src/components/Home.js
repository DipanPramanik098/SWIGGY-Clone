import DineOption from "./DineOption";
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import Header from "./Header";

export default function Home(){
    return (
        <>
            <Header/>
            <FoodOption/>
            <GroceryOption/>
            <DineOption/>
        </>
    )
}