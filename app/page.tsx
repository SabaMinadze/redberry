"use client"

import React, { useState, useEffect } from 'react';
import s from "./page.module.css";
import Subnav from './components/Subnav/Subnav';
import Cards from './components/Cards/Cards';

function Page() {
  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    // Retrieve the data array from localStorage
    const data = JSON.parse(localStorage.getItem("formDataArray")) || [];
    setFormDataArray(data);
  }, []);

  // Handle card deletion
  const handleDelete = (index) => {
    // Filter out the deleted card
    const updatedData = formDataArray.filter((_, i) => i !== index);
    setFormDataArray(updatedData);
    // Update localStorage
    localStorage.setItem("formDataArray", JSON.stringify(updatedData));
  };

  return (
    <>
    <Subnav/>
    <Cards/>
    <div className={s.newCadData}>
      <div className={s.container}>
        {formDataArray.length > 0 ? (
          formDataArray.map((entry, index) => (
            <div key={index} className={s.entry}>
              <h3>Entry {index + 1}</h3>
              <p><strong>Address:</strong> {entry.adress}</p>
              <p><strong>Zipcode:</strong> {entry.zipcode}</p>
              <p><strong>Region:</strong> {entry.region}</p>
              <p><strong>City:</strong> {entry.city}</p>
              <button onClick={() => handleDelete(index)} className={s.deleteButton}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No data submitted yet.</p>
        )}
      </div>
    </div>
    </>
  );
}

export default Page;
