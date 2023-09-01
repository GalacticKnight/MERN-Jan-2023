import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AlbumForm = (props) => {
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
    const handleInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        if(e.target.name === 'explicit'){
            console.log('HERE');
            setAlbum({...album, explicit: !album.explicit})
        }else{
            setAlbum({...album, [e.target.name]: e.target.value})
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        //axios.post('http://localhost:8000/api/postAlbum', album)////
        axios.post('http://localhost:8000/api/postAlbum', album, {withCredentials:true})//++
            .then((res) => {
                setAllAlbums([...allAlbums, res.data])
                //navigate('/')////
                navigate('/dashboard')//++
            })
            .catch((err) => {
                console.log(err);
                if(!err.response.data.verified){//++
                    setErrors({loggedIn:'You must be logged in to post an album'})
                }
                // console.log(err.response.data.error.errors);
                //setErrors(err.response.data.errors);////
                // setErrors(err.response.data.errors);
            })
    }
    return (
        <div className='d-flex justify-content-center'>
            {//++
                errors.loggedIn?
                <p className='text-danger'>{errors.loggedIn}</p>:
                null
            }
            <form className='w-25' onSubmit={submitHandler}>
                <label className='form-label'>Album Name:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={album.albumName} name='albumName'/>
                {
                    errors.albumName?
                    <p className='text-danger'>{errors.albumName.message}</p>:
                    null
                }
                <label className='form-label' >Artist:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={album.artist} name='artist'/>
                {
                    errors.artist?
                    <p className='text-danger'>{errors.artist.message}</p>:
                    null
                }
                <label className='form-label'>Release Year:</label>
                <input className='form-control' type="number" onChange={handleInputChange} value={album.releaseYear} name='releaseYear'/>
                {
                    errors.releaseYear?
                    <p className='text-danger'>{errors.releaseYear.message}</p>:
                    null
                }
                <label className='form-label'>Genre:</label>
                <select className="form-select" name="genre" onChange={handleInputChange} value={album.genre}>
                    <option value="Rock">Rock</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Hip-hop/rap">Hip-hop/rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                    <option value="Metal">Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Country">Country</option>
                    <option value="R&B/Soul">R&B/Soul</option>
                </select>
                {
                    errors.genre?
                    <p className='text-danger'>{errors.genre.message}</p>:
                    null
                }
                <label className='form-label me-3'>Explicit?</label>
                <input className="form-check-input" type="checkbox" name="explicit" onChange={handleInputChange} value={album.explicit}/>
                {
                    errors.explicit?
                    <p className='text-danger'>{errors.explicit.message}</p>:
                    null
                }
                <br />
                <button className='btn btn-primary'>Post Album</button>
            </form>
        </div>
)}
export default AlbumForm;