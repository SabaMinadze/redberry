import React from 'react';
import s from './page.module.css';
import Card from '../components/Card/Card';
import data from "../components/Cards/data.json"
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

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
          <h1>{cardData.price}</h1>

        </div>
      </div>
    </>
  );
}

export default CardPage;

