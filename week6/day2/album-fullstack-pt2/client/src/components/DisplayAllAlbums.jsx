import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const DisplayAllAlbums = (props) => {
    const {allAlbums, setAllAlbums} = props//this is props because we are receviving all the albums information from app.js since its passing something
    // notice how that  {allAlbums, setAllAlbums} uses {} instead of []
    // this is because we are passing in an array of albums from app.js
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums')
            .then((allAlbums) => {
                // console.log(allAlbums.data);
                setAllAlbums(allAlbums.data)
            })
            .catch((err) => {
                console.log(err);
            })
    })

    return (
        <div className='p-4'>
            <h2 className='mb-5'>Check Out Our Collection</h2>
            <div className='d-flex flex-wrap justify-content-around'>
            {
                allAlbums.map((albu) => (
                    <div className='border border-dark p-3 m-3 w-25' key={albu._id}>{/*you need key={albu._id} to be unique  */}{/* I tested this but after removing, it seems fine */}
                        <p>Album Name: {albu.albumName}</p>
                        <p>Artist: {albu.artist}</p>
                        <p>Release Year: {albu.releaseYear}</p>
                        {
                            albu.explicit?
                            <p>Explicit: <span className='text-danger'>&#127348;</span></p>:
                            <p>Clean ✔️</p>
                        }
                    <Link className='me-3'>Edit</Link>
                    <Link to={`/oneAlbum/${albu._id}`}>Details</Link>
                    {/* this will send you to a route <Route path='/oneAlbum/:id' element={<OneAlbum/>}/> OneAlbum is written to show based on the id you put. */}
                    </div>
                ))   
            }
            </div>
        </div>
    )
}

export default DisplayAllAlbums;