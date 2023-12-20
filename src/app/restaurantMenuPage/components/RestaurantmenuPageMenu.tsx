import React from 'react'
import RestaurantmenuPageMenuCard from './RestaurantmenuPageMenuCard'

export default function RestaurantmenuPageMenu() {
  return (
    <main className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <RestaurantmenuPageMenuCard/>
                  {/* MENU CARD */}
                </div>
              </div>
            </main>
  )
}
