import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
        <img className='card_image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4S9t7W1hKVl9lgmubxO2HTvvJ4jw-tQVQYw&usqp=CAU" alt="" />
        <div className='card_info'>
            <img className='card_info_image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4S9t7W1hKVl9lgmubxO2HTvvJ4jw-tQVQYw&usqp=CAU" alt="" />
            <div className='card_info_details'>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit...</span>
                <div className='card_info_details_secondary'>
                    <span>Lorem ipsum <i class="fa-solid fa-circle-check"></i></span>
                    <span>134M-1 year ago</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card