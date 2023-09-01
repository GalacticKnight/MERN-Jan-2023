import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'//import this so you can use the useNavigate() to go to a diferent page
const AlbumForm = (props) => {
    const navigate = useNavigate()
    const {allAlbums, setAllAlbums} = props
    // notice how that  {allAlbums, setAllAlbums} uses {} instead of []
    // this is because we want to pass the albums to the form
    //under normal circumstances you would us [] 

    const [album, setAlbum] = useState({//you need this to set all options to what you want
        albumName: '',
        artist: '',
        releaseYear: 1900,
        genre: 'Rock',// you can put 'Rock' inside to make it start as Rock. But if not , it will default to 'Alternative' which is the top of the radio buttons.
        explicit: false
    })

    const handleInputChange = (e) => {//you will need to pass in the event and the name of the input// this is for the submit
        console.log(e.target.name);//??????????????????????????????????????
        console.log(e.target.value);//????????????????????????????????????
        if(e.target.name === 'explicit'){
            console.log('HERE');
            setAlbum({...album, explicit: !album.explicit})//?????????????????????????????/
        }else{
            setAlbum({...album, [e.target.name]: e.target.value})//????????????????????????????????
        }
    }

    const submitHandler = (e) => {//this activates when the form is submitted
        e.preventDefault();//this is used to prevent the page from refreshing
        axios.post('http://localhost:8000/api/postAlbum', album)//this is used so that you can post to the server
            //app.post('/api/postAlbum', AlbumController.createAlbum)
            //this is from album.controller.js
            //also album is from const [album, setAlbum] = useState and you can pass you informtion from there
            .then((res) => {
                setAllAlbums([...allAlbums, res.data])/// ...allAlbums ??????????????????????????????
                                                        // also why change from albums to res.data?????????????????????????????????????????????????????????????????
                //const {allAlbums, setAllAlbums} = props
                //sets all the albums in back into const {allAlbums, setAllAlbums} = props in the app.js
                navigate('/')//this will send you back to the home page, you must import the navigate() from react-router-dom
            })
            .catch((err) => {
                console.log(err);// this will issue an error if there is an error
            })
    }
    return (
        <div className='d-flex justify-content-center'>
            <form className='w-25' onSubmit={submitHandler}> {/* you need onSubmit={submitHandler} that will trigger when you click on the submit button */}
                <label className='form-label'>Album Name:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={album.albumName} name='albumName'/>
                {/* by setting it to onChange={handleInputChange}, it will submit everything in the [album, setAlbum] before submitting*/}
                {/* you also need value={album.albumName} to reset the value to what the original setter was after we submit  */}
                <label className='form-label' >Artist:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={album.artist} name='artist'/>

                <label className='form-label'>Release Year:</label>
                <input className='form-control' type="number" onChange={handleInputChange} value={album.releaseYear} name='releaseYear'/>

                <label className='form-label'>Genre:</label>
                <select className="form-select" name="genre" onChange={handleInputChange} value={album.genre}>
                    
                    <option value="Alternative">Alternative</option>
                    <option value="Rock">Rock</option>
                    <option value="Hip-hop/rap">Hip-hop/rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                    <option value="Metal">Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Country">Country</option>
                    <option value="R&B/Soul">R&B/Soul</option>
                </select>

                <label className='form-label me-3'>Explicit?</label>
                <input className="form-check-input" type="checkbox" name="explicit" onChange={handleInputChange} value={album.explicit}/>
                <br />
                <button className='btn btn-primary'>Post Album</button>
                {/* this is your button CREATE ONE!!!!!! */}
            </form>
        </div>
)}

export default AlbumForm;