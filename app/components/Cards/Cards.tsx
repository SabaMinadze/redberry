import React from 'react'
import s from "./Cards.module.css"
import data from "./data.json"
import Card from '../Card/Card'
import Link from 'next/link';

function Cards() {
  return (
    <>
    <div className={s.mainCards}>   
      <div className={s.mainCards5}>{data.map(info => <>
        <Link href={`/${info.id}`}><div>
        <Card price={info.price}
        address={info.address}
        bedrooms={info.bedrooms}
        area={info.area}
        zip_code={info.zip_code}
        img={info.image}    
        /></div></Link>
      </>)}
      </div>
    </div>
 

    </>
  )
}

export default Cards