import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'//???????????????????????
import Cookies from 'js-cookie';
const OneAlbum = (props) => {
    const navigate = useNavigate()
    const [userData,setUserData] = useState("")
    const {id} = useParams()//???????????????????????
    const [album, setAlbum] = useState({
        //this will stay empty until the data is feteched and sent here from setAlbum(res.data) which gets its information from axios.get
    })// you are not using the global state so you can use []
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)//thisis a READ request and you are searching using the id from the url
            .then((res) => {
                console.log(res.data.oneAlbum.user_id);// this is a test 
                setUserData(res.data.oneAlbum.user_id)//this is a special case where you actually have no choice but ot put it in a useState and then retreeive it later
                setAlbum(res.data.oneAlbum)// this is used to set all the information you get from axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
                //but why is it being set as res.data?????????????????????????????????????????????????????????????????
                //where is data originated from? axios? mongoose????????????????????????????????????????????????????????????????????????????
                setAllComments(res.data.allCommentsOnOneAlbum)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])///}, []?????????????????????

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then((res) => {
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const deleteCommentHandler = (commentId) => {
        axios.delete(`http://localhost:8000/api/deleteComment/${commentId}`)
            .then((res) => {
                console.log("perfect");
                //navigate('/dashboard')
                setAllComments(allComments.filter(elem=>elem._id!== commentId))//
            })
            .catch((err) => {
                console.log(err);
            })
        }
        
    const postComment = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/postComment/${id}`, {comment}, {withCredentials:true})
            .then((res) => {
                console.log(res);
                setAllComments([...allComments, res.data])//this looks like this because you are adding not changing
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            {/* whatever you set in const [album, setAlbum] = useState({}), you can now get it by using album.*/}
            <h2>{album.albumName}</h2>
            <h3>By: {album.artist}</h3>
            <p>Released in: {album.releaseYear}</p>
            <p>Genre: {album.genre}</p>
            <p>{userData.firstName}</p>
            {/*  */}
            {/* <p>{album.user_id?.firstName}</p> */}
            {/* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector the ? is the querie selector and that waits til the object o load before sending the information */}
            {/* {
                album.explicit?
                <p>Explicit: <span className='text-danger'>&#127348;</span></p>
                ://if not explicit, it will become this instead
                <p>Clean ✔️</p>
            } */}
            {   
                Cookies.get('UserId') === album.user_id?._id?//you need ? for the query selector
                <button onClick={deleteHandler} className='btn btn-danger'>Delete Album</button>
                :
                null
            }
            <form onSubmit={postComment}>
                <label>Comment:</label>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button>Post Comment</button>
            </form>
            <h2>User Comments on {album.albumName}</h2>
            {
                allComments.length>0?
                allComments.map((comment) => (
                    <div className='mb-4'>   
                        <h3>{comment.username} says: {comment.comment}</h3>
                        {
                            comment.user_id === window.localStorage.getItem('uuid')?
                            <button className='btn btn-danger' onClick={()=>deleteCommentHandler(comment._id)}>Delete</button>
                            :
                            null
                        }
                    </div>
                )):
                null
            }
        </div>
)}

export default OneAlbum;