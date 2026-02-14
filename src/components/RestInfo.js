import { useState } from "react";
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch } from "react-redux";

export default function RestInfo({ restData }) {

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  function handleAddItems() {
    setCount(1);
    dispatch(addItems(restData));
  }

  function handleIncrementItems() {
    setCount(count+1);
    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems() {
    setCount(count-1);
    dispatch(DecrementItems(restData));
  }
  return (
    <>
      <div className="flex w-full justify-between mb-2 pb-2">

        {/* Left Section */}
        <div className="w-[70%]">
          <p className="text-2xl text-gray-700 font-semibold mb-1">
            {restData?.name}
          </p>

          <p className="text-xl font-medium">
            {"₹" + ("defaultPrice" in restData
              ? restData?.defaultPrice / 100
              : restData?.price / 100)}
          </p>

          <span className="text-green-700 font-semibold">
            {restData?.ratings?.aggregatedRating?.rating}
          </span>
          <span className="text-gray-600 ml-1">
            {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>

          <p className="text-gray-600 mt-2">
            {restData?.description}
          </p>
        </div>

        {/* Right Section */}
        <div className="w-[20%] relative flex justify-center">

          <img
            className="w-full h-36 object-cover rounded-3xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restData.imageId
            }
            alt="food"
          />

          {/* ADD / Quantity Selector */}
          <div className="absolute -bottom-4 flex justify-center w-full">

            {count === 0 ? (
              <button
                onClick={() => handleAddItems()}
                className="bg-white text-green-600 font-semibold px-6 py-2 
                           rounded-xl shadow-md border border-gray-300 
                           hover:shadow-lg transition cursor-pointer"
              >
                ADD
              </button>
            ) : (
              <div className="flex items-center bg-white border border-gray-300 
                              rounded-xl shadow-md px-3 py-1">

                <button
                  onClick={() => handleDecrementItems()}
                  className="text-gray-700 text-xl font-bold px-3 cursor-pointer"
                >
                  −
                </button>

                <span className="text-green-600 font-semibold px-3">
                  {count}
                </span>

                <button
                  onClick={() => handleIncrementItems()}
                  className="text-green-600 text-xl font-bold px-3 cursor-pointer"
                >
                  +
                </button>

              </div>
            )}

          </div>
        </div>

      </div>

      <hr className="mb-6 mt-6" />
    </>
  );
}
