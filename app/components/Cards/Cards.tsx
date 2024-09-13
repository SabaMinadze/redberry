import React from 'react'
import s from "./Cards.module.css"
import data from "./data.json"
import Image from 'next/image'
import Card from '../Card/Card'

function Cards() {
  return (
    <>
    <div className={s.mainCards}>
      <div>{data.map(info =>
        <>
       <h3>{info.id}</h3>
       <h3>{info.address}</h3>
       <h3>{info.price}</h3>
       <Image src={info.image} alt={'error'} width={100} height={100}/>
       </>
    )}</div>
    <Card/>
    </div>
 

    </>
  )
}

export default Cards