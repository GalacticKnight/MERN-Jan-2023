import React, {useState} from 'react';
import './logRegForm.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = (props) => {
    const navigate = useNavigate()
    const path = useLocation().pathname;
    const location = path.split("/")[1];
    console.log(location);

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const onChangeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }


    // ! onsubmit handler for login here

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className={"bg-img " + location}> 
            <h1 className='text-white'>Login!</h1>
            <form onSubmit={loginHandler} className='col-4 mx-auto user-form'>
                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" name='email' value={userLogin.email} onChange={onChangeHandler}/>

                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" name='password' value={userLogin.password} onChange={onChangeHandler}/>

                <button className='btn btn-dark mt-3'>Login</button>
                <br />
                <Link className='text-white' to={'/'}>Dont have an account? click here to sign up</Link>
            </form>
        </div>
)}

export default Login;