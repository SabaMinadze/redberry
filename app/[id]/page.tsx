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
    <div className={s.pageContainer}>
      <h1>Details for Card {cardData.id}</h1>
      <Image src={cardData.image} alt={''} width={100} height={100}/>
      <Card
        price={cardData.price}
        address={cardData.address}
        bedrooms={cardData.bedrooms}
        area={cardData.area}
        zip_code={cardData.zip_code}
        img={cardData.image}
      />
    </div>
  );
}

export default CardPage;

