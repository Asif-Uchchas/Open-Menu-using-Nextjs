import React from 'react'
import RestaurantmenuPageMenu from './RestaurantmenuPageMenu'
import RestaurantmenuPageRestaurantNavbar from './RestaurantmenuPageRestaurantNavbar'

export default function RestaurantmenuPageDescriptionPortion() {
  return (
    <div className="text-black flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <RestaurantmenuPageRestaurantNavbar />
            {/* RESAURANT NAVBAR */}
            {/* MENU */}
            <RestaurantmenuPageMenu />
            {/* MENU */}
          </div>
        </div>
  )
}
