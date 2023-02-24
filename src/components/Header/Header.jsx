import React from 'react'
import './Header.css'
import logo from './logo.png'

const Header = () => {
  return (
    <div className='header'>
      <h3 className='header_h3'>
        <button className='header_h3_button'><i className="fa-solid fa-bars"></i></button>
        <i class="fa-brands fa-youtube header_h3_icon">YouTube</i>
      </h3>
      <div className='header_search'>
        <input type="text" className='header_search_input'/>
        <button className='header_search_button header_h3_button'><i className="fa-solid fa-magnifying-glass"></i></button>
        <button className='header_h3_button header_search_mic'><i className="fa-solid fa-microphone"></i></button>
      </div>
      <div className='header_buttons'>
        <button className='header_h3_button'><i className="fa-solid fa-plus"></i></button>
        <button className='header_h3_button'><i className="fa-regular fa-bell"></i></button>
        <button className='header_h3_button'><i className="fa-solid fa-arrow-right-to-bracket"></i></button>
      </div>
    </div>
  )
}

export default Header