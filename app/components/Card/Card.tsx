import React from 'react'
import s from "./Card.module.css"
import room from "./room1.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Card() {
  return (
    <>
    <div className={s.mainCard}>
      <div className={s.imgCard}>
        <Image src={room} alt={''}/>
        <button className={s.isRentBtn}>ქირავდება</button>
      </div>
      <div className={s.cardContent}>
        <div className={s.cardContent2}>
          <h1>80 000 ₾</h1>
          <h2 className={s.location}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '24px' }} /></h2>

        </div>

      </div>
    </div>
    </>
  )
}

export default Card