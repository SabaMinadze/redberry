import React from 'react'
import s from "./Card.module.css"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons'; // Use the free solid icon
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faSignsPost } from '@fortawesome/free-solid-svg-icons';



function Card({price, address, bedrooms, area, zip_code, img}) {
  return (
    <>
    <div className={s.mainCard}>
      <div className={s.imgCard}>
        <Image src={img} alt={''} width={384} height={307} className={s.img}/>
        <button className={s.isRentBtn}>ქირავდება</button>
      </div>
      <div className={s.cardContent}>
          <div className={s.cardContent2}>
            <h1>{price} ₾</h1>
            <h3 className={s.location}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '20px' }} /> {address}</h3>
            <div className={s.iconBox}>
            <h3 className={s.inconStyle}><FontAwesomeIcon icon={faBed} className={s.location}/> {bedrooms}</h3>
            <h3 className={s.inconStyle}><FontAwesomeIcon icon={faChartArea} className={s.location}/> {area}მ²</h3>
            <h3 className={s.inconStyle}><FontAwesomeIcon icon={faSignsPost} className={s.location}/> {zip_code}</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card