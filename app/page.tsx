"use client"

import React, { useState, useEffect } from 'react';
import s from "./page.module.css";
import Subnav from './components/Subnav/Subnav';
import Cards from './components/Cards/Cards';

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
    <Cards/>

    <div className={s.addedBox}>
        {lists.length > 0 ? (
          lists.map((q, index) => (
            <div className={s.card} key={index}>
              <h1 key={index}>address: {q.address}</h1>
              <h1 key={index}>zipcode: {q.zipcode}</h1>
              <h1 key={index}>region: {q.region}</h1>
              <h1 key={index}>city: {q.city}</h1>
            </div>
                 ))
              ) : (
                  <h1>No data available</h1>
              )}                    
    </div>
        
    </>
  );
}

export default Page;
