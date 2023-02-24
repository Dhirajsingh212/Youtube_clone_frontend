import React from 'react'
import Card from './Card'
import './Body.css'
import Sidebar from '../Sidebar/Sidebar'
import Scrollbar from '../Scrollbar/Scrollbar'

const Body = () => {
    return (
        <div className='body_main'>
            <div className='body_sidebar'>
                <Sidebar/>
            </div>
            <div className='body_scrollbar'>
                <Scrollbar/>
                <div className='body_'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Body
