import React, {useState, useContext} from 'react';
import { userContext } from '../context/UserContext';
const UserForm = (props) => {
    const {userList, setUserList} = useContext(userContext)
    const [username, setUsername] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        setUserList([...userList, username])
        setUsername('')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Username: </label>
                <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <button>Add user</button>
            </form>
        </div>
)}

export default UserForm;