import React from 'react'
import s from "./page.module.css"
import Subnav from './components/Subnav/Subnav'
import Cards from './components/Cards/Cards'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

function page() {
  return (
    <>
    <Subnav/>
    <Cards/>
    </>
  )
}

export default page