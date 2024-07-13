import React from 'react'
import TopNavigation from './TopNavigation/TopNavigation'
import MiddleNavigation from './MiddleNavigation/MiddleNavigation'
import BottomNavigation from './BottomNavigation/BottomNavigation'


export default function Navigationbar() {
  return (
    <div className="">
        <TopNavigation />
        <MiddleNavigation />
        <BottomNavigation />
    </div>
  )
}
