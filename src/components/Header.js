import React from 'react'
import { Image } from 'react-bootstrap'
import "../styles/Main.css"
import "../styles/Main.scss"

function Header() {
  return (
    <section class="top-nav">
    <div className='container-header'>
      <a className='header-bar-logo' href='/'>
          <Image src='/images/Asteria-header.svg' width="100px" height="100px" className='rounded-top' alt='logo' />
      </a>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li>EN</li>
      <i class="fa-solid fa-chevron-down"></i>
      <li>OUR HOTELS</li>
      <i class="fa-solid fa-chevron-down"></i>
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