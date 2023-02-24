import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar_home'>
           <button className='sidebar_button'><i class="fa-solid fa-house"></i></button>
           <span>Home</span>
        </div>
        <div className='sidebar_home'>
           <button className='sidebar_button'><i class="fa-brands fa-freebsd"></i></button>
           <span>Shorts</span>
        </div>
        <div className='sidebar_home'>
           <button className='sidebar_button'><i class="fa-solid fa-subscript"></i></button>
           <span>subsc</span>
        </div>
        <div className='sidebar_home'>
           <button className='sidebar_button'><i class="fa-solid fa-book"></i></button>
           <span>Library</span>
        </div>
    </div>
  )
}

export default Sidebar