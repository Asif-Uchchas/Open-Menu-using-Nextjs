"use client"
import React from "react";
import ProductdetailsNavbar from "./components/ProductdetailsNavbar";
import ProductdetailsHeader from "./components/ProductdetailsHeader";
import RestaurantDescriptionPortion from "./components/RestaurantDescriptionPortion";


export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <ProductdetailsNavbar />
        {/* NAVBAR */}
        {/* HEADER */}
        <ProductdetailsHeader />
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <RestaurantDescriptionPortion/>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
