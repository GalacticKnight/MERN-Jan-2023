import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'//???????????????????????
const OneAlbum = (props) => {
    const {id} = useParams()//???????????????????????????????
    const [album, setAlbum] = useState({
        //this will stay empty until the data is feteched and sent here from setAlbum(res.data) which gets its information from axios.get
    })// you are not using the global state so you can use []


    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)//thisis a READ request and you are searching using the id from the url
            .then((res) => {
                console.log(res.data);// this is a test 
                setAlbum(res.data)// this is used to set all the information you get from axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
                //but why is it being set as res.data?????????????????????????????????????????????????????????????????
                //where is data originated from? axios? mongoose????????????????????????????????????????????????????????????????????????????
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])///}, []?????????????????????
    return (
        <div>
            {/* whatever you set in const [album, setAlbum] = useState({}), you can now get it by using album.*/}
            <h2>{album.albumName}</h2>
            <h3>By: {album.artist}</h3>
            <p>Released in: {album.releaseYear}</p>
            <p>Genre: {album.genre}</p>
            {
                album.explicit?
                <p>Explicit: <span className='text-danger'>&#127348;</span></p>
                ://if not explicit, it will become this instead
                <p>Clean ✔️</p>
            }
        </div>
)}

export default OneAlbum;