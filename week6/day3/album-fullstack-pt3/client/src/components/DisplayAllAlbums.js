import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import './allAlbums.css'
import Cookies from 'js-cookie';
const DisplayAllAlbums = (props) => {
    
    const {allAlbums, setAllAlbums} = props//this is props because we are receviving all the albums information from app.js since its passing something
    // notice how that  {allAlbums, setAllAlbums} uses {} instead of []
    // this is because we are passing in an array of albums from app.js

    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums', {withCredentials:true})
            .then((allAlbums) => {
                //console.log(allAlbums);//this is to test it in console
                setAllAlbums(allAlbums.data)
            })
            .catch((err) => {
                console.log(err);//this sends an error to the console
                setAllAlbums([])
                navigate('/')
            })
    }, [])

    return (
        <div className='p-4'>
            <h2 className='mb-5'>Check Out Our Collection</h2>
            <div className='d-flex flex-wrap justify-content-around'>
            {
                allAlbums.map((album) => (
                    <div className='p-3 m-3 w-25 album' key={album._id}>
                        {}
                        {/* really cool
                        {album.user_id.firstName}
                        {album.user_id._id}-{Cookies.get('UserId')} */}

                        {/* _id is the invisble attribute that you did not type but has a connection information of the user */}
                        {/* res.status(201).cookie('userToken', userToken, {httpOnly:true,  maxAge: 2 * 60 * 60 * 1000 }).cookie("UserId", user._id.toString()).json({success: 'user logged in',userToken:userToken, user: user})
 */}
                        
                        {album.title}
                        <p>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        {/* {
                            album.explicit?
                            <p>Explicit: <span className='text-danger'>&#127348;</span></p>
                            :
                            <p>Clean ✔️</p>
                        } */}
                        
                        {
                            Cookies.get('UserId') === album.user_id._id?
                            // album.user_id._id this will prnt out the person secret id
                            <Link to={`/editAlbum/${album._id}`} className='btn btn-light'>Edit</Link>
                            :
                            null
                        }
                        <Link to={`/oneAlbum/${album._id}`} className='btn btn-dark'>Details</Link>
                    {/* this will send you to a route <Route path='/oneAlbum/:id' element={<OneAlbum/>}/> OneAlbum is written to show based on the id you put. */}
                    </div>
                ))   
            }
            </div>
        </div>
    )
}

export default DisplayAllAlbums;