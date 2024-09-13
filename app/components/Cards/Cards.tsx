import React from 'react'
import s from "./Cards.module.css"
import Card from '../Card/Card'

function Cards() {
  return (
    <>
    <div className={s.mainCards}>
        <Card/>
        <Card/>
        <Card/>
    </div>
    <div className={s.mainCards}>
        <Card/>
        <Card/>
        <Card/>
    </div>

    </>
  )
}

export default Cards