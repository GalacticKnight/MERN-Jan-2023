import React, {useState, useContext} from 'react';
import { userContext } from '../context/UserContext';
const DisplayUsers = (props) => {
    const {userList, setUserList} = useContext(userContext)
    return (
        <div>
            {
                userList.map((user) => (
                    <h2>{user}</h2>
                ))
            }
        </div>
)}

export default DisplayUsers;