    import React, {useState} from 'react';
import {Link} from 'react-router-dom'
const Nav = (props) => {
    return (
        <div className='d-flex justify-content-evenly align-items-center mb-5'>
            <h1>Records Dot Com</h1>
            <Link to={'/newAlbum/form'}>Post a new album</Link>
            <Link to={'/'}>Home</Link>
        </div>
)}

export default Nav;