import React from 'react'
import RestaurantCar from '@/app/search/components/RestaurantCar'
import RestaurantNavbar from './RestaurantNavbar'
import RestaurantTitle from './RestaurantTitle'
import RestaurantRating from './RestaurantRating'
import RestaurantDescription from './RestaurantDescription'
import RestaurantImages from './RestaurantImages'
import RestaurantReviews from './RestaurantReviews'
import ReservationCard from './ReservationCard'
 


export default function RestaurantDescriptionPortion() {
  return (
    <div className="text-black flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <RestaurantNavbar />
            {/* RESAURANT NAVBAR */}
            {/* TITLE */}
            <RestaurantTitle />
            {/* TITLE */}
            {/* RATING */}
            <RestaurantRating />
            {/* RATING */}
            {/* DESCRIPTION */}
            <RestaurantDescription />
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <RestaurantImages />
            {/* IMAGES */}
            {/* REVIEWS */}
            <RestaurantReviews />
            {/* REVIEWS */}
          </div>
          {/* RESERVATION CARD PORTION */}
          <ReservationCard/>
          {/* RESERVATION CARD PORTION */}
        </div>
  )
}
