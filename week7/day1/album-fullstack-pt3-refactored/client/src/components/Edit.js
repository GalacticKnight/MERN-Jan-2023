import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'
import AlbumForm from './AlbumForm';
const Edit = (props) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const {id} = useParams()
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1900,
        genre: [],
        explicit: false
    })


    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
            .then((res) => {
                console.log(res.data);
                setAlbum(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const editHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateAlbum/${id}`, album)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }


    return (
        <AlbumForm
        album={album}
        setAlbum={setAlbum}
        submitHandler={editHandler}
        errors={errors}
        />
    )
}

export default Edit;