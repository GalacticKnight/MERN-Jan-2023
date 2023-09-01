import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import logo from '../components/images/logo.jpg'
import axios from 'axios'
const Nav = (props) => {
    const navigate = useNavigate()

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {} , {withCredentials:true})
            .then((res) => {
                console.log(res);
                window.localStorage.removeItem('uuid')
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='d-flex justify-content-evenly align-items-center mb-5 p-3 border-bottom'>
            {/* <img style={{width:'120px', borderRadius:'30px'}} src={logo2} alt="" /> */}
            <div className='d-flex justify-content-evenly align-items-center'>
                <h1>Rec</h1>
                <img style={{width:'50px', borderRadius:'30px'}} src={logo} alt="Main Logo" />
                <h1>rds Dot Com</h1>
            </div>
            <div className='w-50 d-flex justify-content-end '>
                {/* {
                    user? */}
                <Link className=' btn btn-secondary' to={'/newAlbum/form'}>Post a new album</Link>
                {/* //     :
                //     null
                // } */}
                <Link className='ms-3 btn btn-info' to={'/dashboard'}>Home</Link>
                <Link className='ms-3 btn btn-info' to={'/profile'}>Profile</Link>
                <button className='ms-3 btn btn-light' onClick={logout}>Logout</button>
            </div>
        </div>
)}

export default Nav;