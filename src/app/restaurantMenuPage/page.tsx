import React from "react";
import RestaurantmenuPageNavbar from "./components/RestaurantmenuPageNavbar";
import RestaurantmenuPageHeader from "./components/RestaurantmenuPageHeader";
import RestaurantmenuPageDescriptionPortion from "./components/RestaurantmenuPageDescriptionPortion";

export default function RestaurantMenuPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <RestaurantmenuPageNavbar />
        {/* NAVBAR */}
        {/* HEADER */}
        <RestaurantmenuPageHeader />
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <RestaurantmenuPageDescriptionPortion/>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
