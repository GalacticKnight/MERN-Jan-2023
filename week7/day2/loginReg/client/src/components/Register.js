import React, {useState} from 'react';
import './logRegForm.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Register = (props) => {
    const navigate = useNavigate()
    const [userReg, setUserReg] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const onChangeHandler = (e) => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }


    // ! Need onsubmithandler for register
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', userReg, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='bg-img'>
            <h1 className='text-white'>Register!</h1>
            <form onSubmit={submitHandler} className='col-4 mx-auto user-form'>
                <label className='form-label'>First Name:</label>
                <input className='form-control' type="text" name='firstName' value={userReg.firstName} onChange={onChangeHandler}/>

                <label className='form-label'>Last Name:</label>
                <input className='form-control' type="text" name='lastName' value={userReg.lastName} onChange={onChangeHandler}/>

                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" name='email' value={userReg.email} onChange={onChangeHandler}/>

                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" name='password' value={userReg.password} onChange={onChangeHandler}/>

                <label className='form-label'>Confirm Password:</label>
                <input className='form-control' type="password" name='confirmPassword' value={userReg.confirmPassword} onChange={onChangeHandler}/>
                <button className='btn btn-dark mt-3'>Register</button>
                <br />
                <Link className='text-white' to={'/login'}>Already have an account? click here to login</Link>
            </form>
        </div>
)}

export default Register;