// "use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { use, useState } from "react";
import { PRICE, PrismaClient } from "@prisma/client";

export interface Product {
    id: number;
    name: String;
    main_image: string;
    cuisine: Cuisine;
    location: Location;
    price: PRICE;
    slug: String;
}

export interface Location{
  id: number;
  name: String;
}

export interface Cuisine{
  id: number;
  name: String;
}
export interface ProductList {
  products: Product[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true
      
    }
  });
  return restaurants;
}

export default async function Home() {

  const restaurants = await fetchRestaurants();
  console.log("restaurant", restaurants);
  // const [product, setProduct] = useState<Product[]>(
  //   [{ productName: "Product A", productReview: '45 reviews', productType: 'Mexican', productPrice: '1590', productLocation: 'New Maxico', productBooked: '28 times' },
  //     { productName: "Product A", productReview: '78 reviews', productType: 'American', productPrice: '1250', productLocation: 'Burgerology', productBooked: '13 times' }]);
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <Header/>
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          {/* CARD */}
          <RestaurantCard products={restaurants}/>
          {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
