"use client"

import React, { useState, useEffect } from 'react';
import s from "./page.module.css";
import Subnav from './components/Subnav/Subnav';
import Cards from './components/Cards/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faMapMarkerAlt, faChartArea, faSignsPost } from '@fortawesome/free-solid-svg-icons';

function Page() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const data = JSON.parse(localStorage.getItem('formDataArray')) || [];
    setLists(data);
  }, []);

  return (
    <>
    <Subnav/>

    <div className={s.addedBox}>
        {lists.length > 0 ? (
          lists.map((q, index) => (
            <div className={s.card} key={index}>
              <h2 key={index} className={s.price}>{q.price} ₾</h2>
              <h1 key={index}> <h1 className={s.adress}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '20px' }}/>  {q.address}</h1></h1>
              <div className={s.iconBox}>
                <h1 key={index}><FontAwesomeIcon icon={faBed} className={s.location} /> {q.bedroomQuantity}</h1>
                <h1 key={index}><FontAwesomeIcon icon={faChartArea} className={s.location} />{q.area} მ²</h1>
                <h1 key={index}><FontAwesomeIcon icon={faSignsPost} className={s.location} />{q.zipcode}</h1>     
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
