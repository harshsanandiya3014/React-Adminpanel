import React from 'react'
import Navbar from '../Components/Navbar'
import Tableadmin from '../Components/Tableadmin'

export default function ShowProduct() {
  return (
    <div>
    <Navbar/>
      <Tableadmin name='products' />
    </div>
  )
}
