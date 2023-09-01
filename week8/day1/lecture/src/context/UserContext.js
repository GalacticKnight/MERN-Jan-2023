import {createContext, useState} from 'react'

export const userContext = createContext()

export const UserProvider = (props) => {
    // set up state 
    const [userList, setUserList] = useState([])

    return (
        // provider with the state 
        <userContext.Provider value={{
            userList,
            setUserList
        }}>

            {props.children}
        </userContext.Provider>
    )
}