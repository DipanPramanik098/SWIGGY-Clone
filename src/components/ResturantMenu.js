import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MenuCard from "./MenuCard"


export default function RestaurantMenu() {

  let { id } = useParams();
  const [selected, setSelected] = useState(null);
  console.log(id);

  const [RestData, setRestData] = useState([]);


  useEffect(() => {

    async function fetchData() {

      const proxyServer = "https://cors-anywhere.herokuapp.com/"
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData.filter((items) => 'title' in items?.card?.card)
      setRestData(filterData);
    }

    fetchData();
  }, [])

  // console.log(RestData);

  return (
    <div>
      <div className="w-[80%] mx-auto my-20">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">
            Search For Dishes
          </p>
        </Link>
      </div>


      <div className="w-[80%] mx-auto flex gap-4 mt-6">
        <button className={`px-6 py-2 rounded-full border border-green-600 text-green-600 font-medium 
                    transition-all duration-300 hover:bg-green-600 hover:text-white 
                    hover:shadow-md active:scale-95
                    ${selected === 'veg' ? "bg-green-600 text-white" : "bg-white"}
                    `}
          onClick={() => setSelected(selected === 'veg' ? null : 'veg')}
        >
          Veg
        </button>

        <button className={`px-6 py-2 rounded-full border border-red-600 text-red-600 
                    font-medium transition-all duration-300 hover:bg-red-600 
                    hover:text-white hover:shadow-md active:scale-95
                    ${selected === 'nonveg' ? "bg-red-600 text-white" : "bg-white"}
                    `}
          onClick={() => setSelected(selected === 'nonveg' ? null : 'nonveg')}
        >
          NonVeg
        </button>
      </div>
      <div className="w-[80%] mx-auto mt-20">
        {
          RestData.map((menuItems) => <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
        }
      </div>
    </div>
  )

}