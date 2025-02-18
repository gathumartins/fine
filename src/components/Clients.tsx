'use client'
import React from 'react'
import dynamic from "next/dynamic";

const ClientsCarousel = dynamic(() => import("./ClientsSlider"), {
  ssr: false,
});

const Clients = ({clients}:any) => {
  return (
    <section className="myCont py-[60px] px-[16px]">
      <ClientsCarousel clients={clients}/>
    </section>
  )
}

export default Clients
