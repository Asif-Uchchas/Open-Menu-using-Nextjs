"use client"
import React from "react";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (city: string | undefined) => {
    if (!city)
        return await prisma.restaurant.findMany();
    const restaurants = await prisma.restaurant.findMany({

        where: {
            location: {
                name: {
                    equals: city
                }
            }
        }
    });
    return restaurants;
}

export default async function SearchBar({ searchParams }: { searchParams: { city: string | undefined } }) {
    
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px] text-black"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
              onClick={() => {
                  if (location === "") {
                        alert("Please enter a location");
                  }
                  router.push(`/search?location=${location}`);
                  setLocation("");
        }
        }
      >
        Let's go
      </button>
    </div>
  );
}
