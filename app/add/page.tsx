"use client";

import React, { useState } from 'react';
import s from "./page.module.css";
import Button from '../components/Button/Button';
import { useRouter } from 'next/navigation';
import data from "../components/Cards/data.json"; // Import your JSON data

function Page() {
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState()
    const [area, setArea] = useState()
    const [bedroomQuantity, setBedroomQuantity] = useState()
    const [formDataArray, setFormDataArray] = useState(data); // Use initial data here
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();

        const newData = { address, zipcode, region, city, price, area, bedroomQuantity};
        
        // Update the form data array with new data
        const existingData = JSON.parse(localStorage.getItem('formDataArray')) || [];

        localStorage.setItem('formDataArray', JSON.stringify([...existingData, newData]));
        // Simulate success
        router.push("/");
    }

    return (
        <>
            <div>
                <div className={s.box}>
                    <form onSubmit={handleSubmit}>
                        <center><h1 className={s.txt}>ლისტინგის დამატება</h1></center>
                        <div className={s.flexBox}>
                            <label htmlFor="" className={s.title2}>მისამართი</label><br />
                            <label htmlFor="" className={s.title1}>საფოსტო ინდექსი</label><br />
                        </div>
                        <div className={s.flexBox}>
                            <input
                                type="text"
                                name="address"
                                required 
                                className={s.inpt}
                                onChange={(e) => setAddress(e.target.value)}
                            /><br />
                            <input
                                type="text"
                                name="zipcode"
                                required
                                className={s.inpt}
                                onChange={(e) => setZipcode(e.target.value)}
                            />
                        </div>
                    
                        <br /><br /><br />
                        <div className={s.flexBox}>
                            <label htmlFor="" className={s.title2}>რეგიონი</label><br />
                            <label htmlFor="" className={s.title3}>ქალაქი</label><br />
                        </div>
                        <div className={s.flexBox}>
                            <input
                                type="text"
                                name="region"
                                required
                                className={s.inpt}
                                onChange={(e) => setRegion(e.target.value)}
                            /><br />
                            <input
                                type="text"
                                name="city"
                                required
                                className={s.inpt}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <br />

                        <br /><br /><br />
                        <h1 className={s.txt1}>ბინის დეტალები</h1>
                        <div className={s.flexBox}>
                            <label htmlFor="" className={s.title2}>ფასი</label><br />
                            <label htmlFor="" className={s.title4}>ფართობი</label><br />
                        </div>
                        <div className={s.flexBox}>
                            <input
                                type="text"
                                name="region"
                                required
                                className={s.inpt}
                                onChange={(e) => setPrice(e.target.value)}
                            /><br />
                            <input
                                type="text"
                                name="city"
                                required
                                className={s.inpt}
                                onChange={(e) => setArea(e.target.value)}
                            />
                        </div>
                        <br />

                        <br />
                        <div className={s.flexBox}>
                            <label htmlFor="" className={s.title2}>საძინებლის რაოდენობა*</label><br />
                        </div>
                        <div className={s.flexBox}>
                            <input
                                type="text"
                                name="region"
                                required
                                className={s.inpt}
                                onChange={(e) => setBedroomQuantity(e.target.value)}
                            /><br />
                        </div>
                        <br />
                        <center><Button title='დაამატე ლისტინგი'/></center>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page;
