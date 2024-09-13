import React from 'react'
import s from "./Header.module.css"
import logo from "./logo.png"
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <>
    <div className={s.header}>
        <Link href="/"><h1 className={s.headerTxt}><Image src={logo} alt={''}/></h1></Link>
    </div>
    </>
  )
}

export default Header