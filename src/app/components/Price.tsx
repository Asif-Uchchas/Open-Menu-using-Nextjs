import { PRICE } from '@prisma/client'
import React from 'react'


export default function Price({ price }: { price: PRICE }) {

    const renderPrice = () => {
        if (price === PRICE.CHEAP) {
            return (
                <>
                    <span className='text-gray-400'>$$</span>
                </>
            )
        }
        else if (price === PRICE.REGULAR) {
            return (
                <>
                    <span className='text-gray-400'>$$$</span>
                </>
            )
        }
        else {
            return (
                <>
                    <span className='text-gray-400'>$$$$$</span>
                </>
            )
        }
    }
        return(
        <p className='text-reg font-light mr-3'>{renderPrice()}</p>
        )
  
}
