'use client';

import React, { useState } from 'react';
import s from "./page.module.css";
import Button from '../components/Button/Button';
import { useRouter } from 'next/navigation';

function Page() {
    // Define the types of your state variables
    const [address, setAddress] = useState<string>("");
    const [zipcode, setZipcode] = useState<string>("");
    const [region, setRegion] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [price, setPrice] = useState<number | "">("");
    const [area, setArea] = useState<number | "">("");
    const [bedroomQuantity, setBedroomQuantity] = useState<number | "">("");
    const router = useRouter();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newData = { address, zipcode, region, city, price, area, bedroomQuantity };
        const existingData = JSON.parse(localStorage.getItem('formDataArray') || '[]');
        localStorage.setItem('formDataArray', JSON.stringify([...existingData, newData]));
        router.push("/");
    }

    return (
        <>
            <div>
                <div className={s.box}>
                    <form onSubmit={handleSubmit}>
                        <center><h1 className={s.txt}>ლისტინგის დამატება</h1></center>
                        <div className={s.flexBox}>
                            <label htmlFor="address" className={s.title2}>მისამართი</label><br />
                            <label htmlFor="zipcode" className={s.title1}>საფოსტო ინდექსი</label><br />
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
                            <label htmlFor="region" className={s.title2}>რეგიონი</label><br />
                            <label htmlFor="city" className={s.title3}>ქალაქი</label><br />
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
                            <label htmlFor="price" className={s.title2}>ფასი</label><br />
                            <label htmlFor="area" className={s.title4}>ფართობი</label><br />
                        </div>
                        <div className={s.flexBox}>
                            <input
                                type="number"
                                name="price"
                                required
                                className={s.inpt}
                                onChange={(e) => setPrice(Number(e.target.value))}
                            /><br />
                            <input
                                type="number"
                                name="area"
                                required
                                className={s.inpt}
                                onChange={(e) => setArea(Number(e.target.value))}
                            />
                        </div>
                        <br />

                        <br />
                        <div className={s.flexBox}>
                            <label htmlFor="bedroomQuantity" className={s.title2}>საძინებლის რაოდენობა*</label><br />
                        </div>
                        <div className={s.flexBox}>
                            <input
                                type="number"
                                name="bedroomQuantity"
                                required
                                className={s.inpt}
                                onChange={(e) => setBedroomQuantity(Number(e.target.value))}
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
