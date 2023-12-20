import React from "react";
import Header from "./components/Header";
import Search_side_bar from "./components/Search_side_bar";
import RestaurantCar from "./components/RestaurantCar";
import Navbar from "./components/Navbar";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar/>
        {/* HEADER */}
        <Header />
        <div className="flex text-black py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <Search_side_bar/>
        {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <RestaurantCar/>
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  );
}
