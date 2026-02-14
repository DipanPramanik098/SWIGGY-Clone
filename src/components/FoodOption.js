import FoodData from '../Utils/FoodData';
import FoodCard from './FoodCard';
function FoodOption() {
    return (
        <div className="container mx-auto mt-20">
            <h1 className=" font-bold text-3xl mb-10">Order our best food options</h1>
            <div className="grid grid-rows-2 grid-flow-col
        gap-5
        overflow-x-auto overflow-y-hidden
        auto-cols-max">
                {
                    FoodData.map((fd) => <FoodCard key={fd.id} foodData={fd}></FoodCard>)
                }
            </div>
        </div>
    )
}
export default FoodOption;