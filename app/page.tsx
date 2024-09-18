'use client';

import React, { useState, useEffect } from 'react';
import s from "./page.module.css";
import Subnav from './components/Subnav/Subnav';
import Cards from './components/Cards/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faMapMarkerAlt, faChartArea, faSignsPost } from '@fortawesome/free-solid-svg-icons';

// Define the type for the data stored in localStorage
interface Listing {
  address: string;
  zipcode: string;
  region: string;
  city: string;
  price: number;
  area: number;
  bedroomQuantity: number;
}

function Page() {
  // Use the correct type for the state
  const [lists, setLists] = useState<Listing[]>([]);

  useEffect(() => {
    // Retrieve data from local storage and parse it as an array of Listing objects
    const data = JSON.parse(localStorage.getItem('formDataArray') || '[]') as Listing[];
    setLists(data);
  }, []);

  return (
    <>
      <Subnav />
      <Cards />

      <div className={s.addedBox}>
        {lists.length > 0 ? (
          lists.map((q, index) => (
            <div className={s.card} key={index}>
              <h2 className={s.price}>{q.price} ₾</h2>
              <h1 className={s.adress}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '20px' }} /> {q.address}
              </h1>
              <div className={s.iconBox}>
                <h1><FontAwesomeIcon icon={faBed} className={s.location} /> {q.bedroomQuantity}</h1>
                <h1><FontAwesomeIcon icon={faChartArea} className={s.location} /> {q.area} მ²</h1>
                <h1><FontAwesomeIcon icon={faSignsPost} className={s.location} /> {q.zipcode}</h1>
              </div>
              <h1 className={s.region}>{q.region}</h1>
            </div>
          ))
        ) : (
          <h1>ბინები არ არის დამატებული</h1>
        )}
      </div>
    </>
  );
}

export default Page;
