import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './allAlbums.css'
const DisplayAllAlbums = (props) => {
    const {allAlbums, setAllAlbums} = props
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
                allAlbums.map((album) => (
                    <div className='p-3 m-3 w-25 album' key={album._id}>
                        <p>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        {
                            album.explicit?
                            <p>Explicit: <span className='text-danger'>&#127348;</span></p>:
                            <p>Clean ✔️</p>
                        }
                    <Link to={`/editAlbum/${album._id}`} className='me-3 btn border'>Edit</Link>
                    <Link to={`/oneAlbum/${album._id}`} className='btn border'>Details</Link>
                    </div>
                ))   
            }
            </div>
        </div>
    )
}

export default DisplayAllAlbums;