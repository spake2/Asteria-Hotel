import React from 'react'
import { Image } from 'react-bootstrap'
import "../styles/Main.css"
import "../styles/Main.scss"

function Header() {
  return (
    <section className="top-nav">
    <div className='container-header'>
      <a className='header-bar-logo' href='/'>
          <Image src='/images/Asteria-header.svg' width="100px" height="100px" className='rounded-top' alt='logo' />
      </a>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li>EN
      <i className="fa-solid fa-chevron-down"></i>
      </li>
      <li>OUR HOTELS
      <i className="fa-solid fa-chevron-down"></i>
      </li>
      <div className='down-icon'>
      </div>
      <li className='hotels-li'>ACCOMMODATION </li>
      <li>RESTAURANTS</li>
      <li>ACTIVITIES</li>
      <li>SPA & WELLNESS</li>
      <li>CONFERENCE</li>
      <li>SPORT</li>
    </ul>
  </section>
  )
}

export default Header