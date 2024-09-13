import React from 'react'
import s from "./Card.module.css"
import room from "./room1.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons'; // Use the free solid icon
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { faSignsPost } from '@fortawesome/free-solid-svg-icons';



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
          <h3 className={s.location}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '20px' }} /> თბილისი, ი, ჭავჭავაძის 53</h3>
          <div className={s.iconBox}>
          <h3 className={s.inconStyle}><FontAwesomeIcon icon={faBed} className={s.location}/> 2</h3>
          <h3 className={s.inconStyle}><FontAwesomeIcon icon={faChartArea} className={s.location}/> 55მ</h3>
          <h3 className={s.inconStyle}><FontAwesomeIcon icon={faSignsPost} className={s.location}/> 0160</h3>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Card