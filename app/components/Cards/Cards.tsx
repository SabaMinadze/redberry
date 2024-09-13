import React from 'react'
import s from "./Cards.module.css"
import data from "./data.json"
import Card from '../Card/Card'

function Cards() {
  return (
    <>
    <div className={s.mainCards}>
      
      <div className={s.mainCards5}>{data.map(info => <>
      <Card price={info.price}
      address={info.address}
      bedrooms={info.bedrooms}
      area={info.area}
      zip_code={info.zip_code}
      img={info.image}
      />
      </>)}
      </div>
    </div>
 

    </>
  )
}

export default Cards