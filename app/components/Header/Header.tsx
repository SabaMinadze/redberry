import React from 'react'
import s from "./Header.module.css"
import logo from "./logo.png"
import Image from 'next/image'

function Header() {
  return (
    <>
    <div className={s.header}>
        <h1 className={s.headerTxt}><Image src={logo} alt={''}/></h1>
    </div>
    </>
  )
}

export default Header