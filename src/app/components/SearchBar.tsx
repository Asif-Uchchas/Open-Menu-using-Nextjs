"use client"
import { PrismaClient } from "@prisma/client";
import { useRouter } from 'next/navigation'
import { useState } from "react";


// const prisma=new PrismaClient();
// const fetchRestaurantByCity =(city:string|undefined)=>{
//   if(!city)
//   return  prisma.restaurant.findMany();
//   const restaurants= prisma.restaurant.findMany({
//     where:{
//       location:{
//         name:{
//           equals:city
//         }
//       }
//     }
// });
// return restaurants;
// }


export default function SearchBar({searchParams}:{searchParams:{city:string|undefined}})
{
    const router=useRouter();
    const [location,setLocation]=useState("");
    // const restaurants= await fetchRestaurantByCity(searchParams.city);
    return(
        <div className="text-left text-lg py-3 m-auto flex justify-center">
          <input
            className="rounded  mr-3 p-2 w-[450px] text-black"
            type="text"
            placeholder="State, city or town"
            value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        
        <button className="rounded bg-red-600 px-9 py-2 text-white"
          onClick={()=>{
            if(location===" ") {
              return;
            }
            router.push(`/search?city=${location}`);
            setLocation("")
          }}
          >
            Let's go
          </button>
        </div>
    )
}

