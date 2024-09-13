import React from 'react';
import s from './page.module.css';
import data from "../components/Cards/data.json"
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faMapMarkerAlt, faChartArea, faSignsPost } from '@fortawesome/free-solid-svg-icons';


export async function generateStaticParams() {
  return data.map((info) => ({
    id: info.id.toString(),   
  }));
}

async function CardPage({ params }: { params: { id: string } }) {
  const cardData = data.find((info) => info.id.toString() === params.id);

  if (!cardData) {
    return <p>Card not found</p>;
  }

  return (
    <>
      <h1 className={s.txt}>Details for Card {cardData.id}</h1>
      <div className={s.pageContainer}>
        <Image src={cardData.image} alt={''} width={689} height={520}/>
        <div className={s.sideBar}>
          <h1 className={s.price}>{cardData.price} ₾</h1>
          <div className={s.icons}>
            <h3 className={s.txt2}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '20px' }} /> {cardData.address}</h3>
            <h3 className={s.txt2}><FontAwesomeIcon icon={faChartArea} style={{ fontSize: '20px' }} /> ფართობი {cardData.area} მ²</h3>
            <h3 className={s.txt2}><FontAwesomeIcon icon={faBed} style={{ fontSize: '20px' }} /> საძინებელი {cardData.bedrooms}</h3>
            <h3 className={s.txt2}><FontAwesomeIcon icon={faSignsPost} style={{ fontSize: '20px' }} /> საფოსტო ინდექსი {cardData.zip_code}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPage;

