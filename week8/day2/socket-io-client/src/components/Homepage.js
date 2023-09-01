import React, {useState, useEffect} from 'react';

const Homepage = (props) => {
    const {socket, username, setUsername} = props
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        socket.on('new-user-joined', data => {
            console.log(data);
            setUsers(data)
        })
        socket.on('send-message-to-all-clients', data => {
            // console.log(data);
            setMessages(prevMessages => [...prevMessages, data])
        })
    },[])
    const sendMessage = (e) => {
        e.preventDefault()
        socket.emit('send-message', {message:input, username:username})
    }
    return (
        <div>
            <h1>Welcome {username} to the Socket.io room</h1>
            {
                users.map((user) => (
                    <p>{user.username} Joined the chat</p>
                ))
            }
            <form onSubmit={sendMessage}>
                <label>Message:</label>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button>Send Message</button>
            </form>
            {
                messages.map((message) => (
                    <p>{message.username} Says: {message.message}</p>
                ))
            }
        </div>
)}

export default Homepage;