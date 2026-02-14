import DineData from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineOption(){
    return (
        <div className="container mx-auto mt-20 mb-20">
            <h1 className=" font-bold text-3xl mb-10">Discover best restaurants on DineOut</h1>
            <div className="grid grid-rows-1 grid-flow-col
        gap-5
        overflow-x-auto overflow-y-hidden
        auto-cols-max">
                {
                    DineData.map((dd)=> <DineCard key={dd.info.id} restData={dd}></DineCard>)
                }
            </div>
        </div>
    )
}