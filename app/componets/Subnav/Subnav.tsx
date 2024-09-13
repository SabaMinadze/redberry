import React from 'react'
import s from "./Subnav.module.css"

function Subnav() {
  return (
    <>
    <div className={s.subnav}>
        <ul className={s.subnavUl}>
            <li><h2>რეგიონი</h2></li>
            <li><h2>საფასო კატეგორია</h2></li>
            <li><h2>ფართობი</h2></li>
            <li><h2>საძინებლის რაოდენობა</h2></li>
        </ul>
        <div className={s.subnav2}>
            a
        </div>
    </div>
    </>
  )
}

export default Subnav