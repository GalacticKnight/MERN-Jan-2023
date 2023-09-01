import './loginRegForm.css'
import { Link, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios'
import React, {useState, useContext} from 'react';
import { userContext } from '../context/UserContext';
const Login = (props) => {
    const {loggedInUser, setLoggedInUser} = useContext(userContext)
    const [error, setError] = useState("")
    const path = useLocation().pathname;
    const location = path.split('/')[1]
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })
    const onChangeHandler = (e) => {//what does this do?
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res);
                setLoggedInUser(res.data.user)
                window.localStorage.setItem('uuid', res.data.user._id)
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err.response.data.message);//change to 
                setError(err.response.data.message);//chris
            })
    }
    return (
        <div>
            <h1 className='text-white'>Login</h1>
            <form onSubmit={submitHandler} className='col-4 mx-auto user-form mt-5'>
                {//chris
                    error?
                    <p>{error}</p>
                    ://if not explicit, it will become this instead
                    null
                }
                <label className='form-label'>Email:</label>
                <input type="text" name="email" className='form-control' onChange={onChangeHandler} value={userLogin.email}/>
                <label className='form-label'>Password:</label>
                <input type="text" name="password" className='form-control' onChange={onChangeHandler} value={userLogin.password}/>
                <button className='btn btn-dark border mt-3'>Login</button>
                <br />
                <Link className='text-white' to={'/'}>Dont have an account? Sign up here</Link>
            </form>
        </div>
)}
export default Login;