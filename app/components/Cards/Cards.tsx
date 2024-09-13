import React from 'react'
import s from "./Cards.module.css"
import Card from '../Card/Card'

function Cards() {
  return (
    <>
    <div className={s.mainCards}>
        <Card/>
    </div>
    </>
  )
}

export default Cards