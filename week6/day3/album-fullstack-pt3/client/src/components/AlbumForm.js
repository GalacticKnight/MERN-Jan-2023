import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AlbumForm = (props) => {
    const navigate = useNavigate()
    const {allAlbums, setAllAlbums} = props
    // notice how that  {allAlbums, setAllAlbums} uses {} instead of []
    // this is because we want to pass the albums to the form
    //under normal circumstances you would us [] 
    const [errors, setErrors] = useState({})//???????????   
    //you need errors
    const [album, setAlbum] = useState({//you need this to set all options to what you want
        albumName: '',
        artist: '',
        releaseYear: 1900,
        genre: 'Rock',// you can put 'Rock' inside to make it start as Rock. But if not , it will default to 'Alternative' which is the top of the radio buttons.
        // explicit: false
    })

    const handleInputChange = (e) => {//you will need to pass in the event and the name of the input// this is for the submit
        console.log(e.target.name);//??????????????????????????????????????
        console.log(e.target.value);//??????????????????????????????????????
        // if(e.target.name === 'explicit'){//e.target.name????????????????????????????????????????????????????????????????????????????????????????
        //     console.log('HERE');
            // setAlbum({...album, explicit: !album.explicit})//?????????????????????????????/
        // }else{
        setAlbum({...album, [e.target.name]: e.target.value})//this is potientially changing the value of what you are putting in while the other one, in the comments are is just adding to the list
        // }
        //setAlbum({...album, [e.target.name]: e.target.value})//
    }

    const submitHandler = (e) => {//this activates when the form is submitted
        e.preventDefault();//this is used to prevent the page from refreshing
        axios.post('http://localhost:8000/api/postAlbum', album, {withCredentials:true})//this is used so that you can post to the server
            //app.post('/api/postAlbum', AlbumController.createAlbum)
            //this is from album.controller.js
            //also album is from const [album, setAlbum] = useState and you can pass you informtion from there
            .then((res) => {
                console.log(res);
                setAllAlbums([...allAlbums, res.data])/// ...allAlbums ??????????????????????????????
                                                        // also why change from albums to res.data?????????????????????????????????????????????????????????????????
                navigate('/dashboard') //this will send you back to the dashboard, you must import the navigate() from react-router-dom
            })
            .catch((err) => {
                console.log(err);// this will issue an error if there is an error
                //console.log(err.response.data.error.errors);//potiential way to handle
                if(!err.response.data.verified){//????????????????????????????????????????????????????????????????????????????????????????
                    setErrors({loggedIn:'You must be logged in to post an album'})//????????????????????????????????????????????????????????????????????????????????
                }
                // console.log(err.response.data.error.errors);?????????????????
                // setErrors(err.response.data.errors);????????????????????????
            })
    }
    return (
        <div className='d-flex justify-content-center'>
            {
                errors.loggedIn?
                <p className='text-danger'>{errors.loggedIn}</p>
                :
                null
            }
            <form className='w-25' onSubmit={submitHandler}>
                <label className='form-label'>Album Name:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={album.albumName} name='albumName'/>
                {/* by setting it to onChange={handleInputChange}, it will submit everything in the [album, setAlbum] before submitting*/}
                {/* you also need value={album.albumName} to reset the value to what the original setter was after we submit  */}
                {//you need this ternary to pop up an error from 
                    errors.albumName?
                    <p className='text-danger'>{errors.albumName.message}</p>//????????????????????????????why is it written as errors.albumName.message
                    :
                    null
                }

                <label className='form-label' >Artist:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={album.artist} name='artist'/>
                {
                    errors.artist?
                    <p className='text-danger'>{errors.artist.message}</p>://????????????????????????????????????????????????????????????????????????????
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
                {/* <label className='form-label me-3'>Explicit?</label>
                <input className="form-check-input" type="checkbox" name="explicit" onChange={handleInputChange} value={album.explicit}/>
                {
                    errors.explicit?
                    <p className='text-danger'>{errors.explicit.message}</p>:
                    null
                } */}
                <br />
                <button className='btn btn-primary'>Post Album</button>
                {/* this is your button CREATE ONE!!!!!! */}
            </form>
        </div>
)}

export default AlbumForm;