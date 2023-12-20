import React from 'react'
import ReservationpageHeader from './components/ReservationpageHeader'
import ReservationpageNavbar from './components/ReservationpageNavbar'
import ReservationpageForm from './components/ReservationpageForm'

export default function ReservationPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <ReservationpageNavbar/>
    {/* NAVBAR END */}
    <div className="text-black border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        {/* HEADER */}
        <ReservationpageHeader/>
            {/* HEADER */}
            {/* FORM */}
            <ReservationpageForm/>
            {/* FORM */}
        
      </div>
    </div>
  </main>
    </main>
    

    

  )
}
