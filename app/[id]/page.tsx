import React from 'react'
import s from "./page.module.css"
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Card from '../components/Card/Card';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS


function page({params}) {
  return (
    <>
      <h1>Hello {params.id}</h1>
      <Card/>
    </>
  )
}

export default page