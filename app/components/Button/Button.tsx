import React from 'react'
import s from "./Button.module.css"

function Button(props:any) {
  return (
    <>
    <button className={s.btn}
     style={{ backgroundColor: props.color === "whitening" ? "white" : null,
      color: props.color === "whitening" ? "#F93B1D" :null,
      border: props.color === "whitening" ? "2px solid #F93B1D" : null
      }}
     >
        {props.title}
        </button>
    </>
  )
}

export default Button