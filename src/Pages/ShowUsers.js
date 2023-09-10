import React from 'react'
import Navbar from '../Components/Navbar'
import Tableadmin from '../Components/Tableadmin'

export default function ShowUsers() {
  return (
    <div>
    <Navbar/>
      <Tableadmin name='users'/>
    </div>
  )
}
