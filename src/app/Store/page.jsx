import CardDiscount from '@/StoreComponents/CardDiscount'
import CardOffer from '@/StoreComponents/CardOffer'
import Catagories from '@/StoreComponents/Catagories'
import CollectionFood from '@/StoreComponents/CollectionFood'
import Features from '@/StoreComponents/Features'
import HotDeal from '@/StoreComponents/HotDeal'
import LocalsBanner from '@/StoreComponents/LocalsBanner'
import Slider from '@/StoreComponents/Slider'
import WeelDeals from '@/StoreComponents/WeelDeals'
import React from 'react'

export default function StoreHome() {
  return (
    <div>
      <Slider />
      <Features/>

      <Catagories />
      <LocalsBanner />

      <WeelDeals />
      <CardOffer />    {/* */}

      {/* <CollectionFood/> */}
      <HotDeal />
      <CardDiscount />
    </div>
  )
}

