import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../components/images/logo.jpg'
import logo2 from '../components/images/logo-no-background.png'
const Nav = (props) => {
    return (
        <div className='d-flex justify-content-evenly align-items-center mb-5 p-3 border-bottom'>
            {/* <img style={{width:'120px', borderRadius:'30px'}} src={logo2} alt="" /> */}
            <div className='d-flex justify-content-evenly align-items-center'>
                <h1>Rec</h1>
                <img style={{width:'50px', borderRadius:'30px'}} src={logo} alt="Main Logo" />
                <h1>rds Dot Com</h1>
            </div>
            <div className='w-50 d-flex justify-content-end '>
                <Link className='nav-link me-5' to={'/newAlbum/form'}>Post a new album</Link>
                <Link className='nav-link' to={'/'}>Home</Link>
            </div>
        </div>
)}

export default Nav;