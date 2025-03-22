import React from 'react'
import ProductSold from './ProductSold'
import SalesCard from './SalesCard'

const OverView = () => {
  return (
    <div className="w-full flex gap-10 p-4 h-full border-2 border-red-600">
     <ProductSold/>
     <SalesCard/>
    </div>
  )
}

export default OverView
