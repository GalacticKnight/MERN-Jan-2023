import React, {useState} from 'react';
import './loginRegForm.css'
import { Link, useNavigate} from 'react-router-dom';
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
    const submitHandler = (e) => {
        console.log("HERE");
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', userReg, {withCredentials:true})
            .then((res) => {
                console.log(res);
                window.localStorage.setItem('uuid', res.data.user._id)
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className=''>
            <h1 className='text-white'>Register!</h1>
            <form onSubmit={submitHandler} className='col-4 mx-auto user-form mt-5'>
                <label className='form-label'>First Name:</label>
                <input type="text" name="firstName" className='form-control' onChange={onChangeHandler} value={userReg.firstName}/>

                <label className='form-label'>Last Name:</label>
                <input type="text" name="lastName" className='form-control' onChange={onChangeHandler} value={userReg.lastName}/>

                <label className='form-label'>Email:</label>
                <input type="text" name="email" className='form-control' onChange={onChangeHandler} value={userReg.email}/>

                <label className='form-label'>Password:</label>
                <input type="text" name="password" className='form-control' onChange={onChangeHandler} value={userReg.password}/>

                <label className='form-label'>Confirm Password:</label>
                <input type="text" name="confirmPassword" className='form-control' onChange={onChangeHandler} value={userReg.confirmPassword}/>

                <button className='btn btn-dark border mt-3'>Register</button>
                <br />
                <Link className='text-white' to={'/login'}>Already have an account? Login here</Link>
            </form>
        </div>
)}

export default Register;