import React, {useState} from 'react';
import AlbumForm from './AlbumForm';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const CreateAlbum = (props) => {
    const navigate = useNavigate()
    const {allAlbums, setAllAlbums} = props
    const [errors, setErrors] = useState({})
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1900,
        genre: 'Rock',
        explicit: false
    })
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postAlbum', album)
            .then((res) => {
                setAllAlbums([...allAlbums, res.data])
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                // console.log(err.response.data.error.errors);
                setErrors(err.response.data.errors);
            })
    }
    return (
        <AlbumForm
        album={album}
        setAlbum={setAlbum}
        submitHandler={submitHandler}
        errors={errors}
        />
)}

export default CreateAlbum;