import React from 'react'
import s from "./Subnav.module.css"

function Subnav() {
  return (
    <>
    <div className={s.main}>
        <div className={s.subnav}>
            <ul className={s.subnavUl}>
                <li><h2>რეგიონი</h2></li>
                <li><h2>საფასო კატეგორია</h2></li>
                <li><h2>ფართობი</h2></li>
                <li><h2>საძინებლის რაოდენობა</h2></li>
            </ul>
        </div>
        <div  className={s.test}>
            <button>+ ლისტინგის დამატება</button>
            <button>+ აგენტის დამატება</button>
        </div>
    </div>
    </>
  )
}

export default Subnav