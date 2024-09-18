"use client"

import React, { useState, useEffect } from 'react'
import s from "./page.module.css"
import Button from '../components/Button/Button'
import { useRouter} from 'next/navigation'

function page() {
    const [adress, setAdress] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [region, setRegion] = useState("")
    const [city, setCity] = useState("")
    const [isPending, setIspending] = useState(false)
    const [submittedData, setSubmittedData] = useState(null);
    const [formDataArray, setFormDataArray] = useState([])
    const router = useRouter()


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("formDataArray")) || [];
        setFormDataArray(data);
      }, []);


    function handleSubmit(e) {
        e.preventDefault();
        const newData = {adress, zipcode, region, city};
        setIspending(true)
        fetch("http://localhost:3000/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newData)
        }).then(() => {
            console.log("new content added");
            const updatedData = [...formDataArray, newData];
            console.log(newData);
            localStorage.setItem("formDataArray", JSON.stringify(updatedData));
            setFormDataArray(updatedData);
            setAdress("");
            setZipcode("");
            setRegion("");
            setCity("");
            setIspending(false);
            // Update state with submitted data
            setSubmittedData(newData);
            router.push('/'); // Redirect to the main page
            
        })



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
                    name="adress"
                    required 
                    className={s.inpt}
                    onChange={(e) => setAdress(e.target.value)}
                    /><br />
                    <input
                    type="text"
                    name="zipcode"
                    required
                        className={s.inpt}
                        onChange={(e) => setZipcode(e.target.value)}/>
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
                        onChange={(e) => setRegion(e.target.value)}/><br />
                    <input
                    type="text"
                    name="city"
                    required
                        className={s.inpt}
                        onChange={(e) => setCity(e.target.value)}/>
                </div>
                <br />
                <center><Button title='დაამატე ლისტინგი'/></center>
            </form>
        </div>
    </div>
    </>
  )
}

export default page