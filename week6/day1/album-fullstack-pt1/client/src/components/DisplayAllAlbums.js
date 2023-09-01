import React, { useState, useEffect } from 'react';
import axios from 'axios'
const DisplayAllAlbums = (props) => {
    const [allAlbums, setAllAlbums] = useState([]) 
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
        <div>
            <h2>Check out our album collection</h2>
            {
                allAlbums.map((album) => (//it will map through all the albums and display them
                    <div className='border border-success'>
                        <p className='text-danger'>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        {//it will display the image of the album
                            album.explicit?
                            <p>Explicit: Yes</p>
                            :
                            <p>Explicit: No</p>// if explicit is false then it will display the image of the album
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAllAlbums;