import React from 'react'
import s from "./Card.module.css"
import room from "./room1.png"
import Image from 'next/image'

function Card() {
  return (
    <>
    <div className={s.mainCard}>
      <div className={s.imgCard}>
        <Image src={room} alt={''}/>
        <button className={s.isRentBtn}>ქირავდება</button>
      </div>
      <div className={s.cardContent}>

      </div>
    </div>
    </>
  )
}

export default Card