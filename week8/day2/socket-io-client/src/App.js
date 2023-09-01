import './App.css';
import io from 'socket.io-client';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Form from './components/Form';
import Homepage from './components/Homepage';

function App() {
  const [socket] = useState(() => io(':8000'));
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [username, setUsername] = useState('')


  useEffect(() => {
    console.log('Running');

    socket.on('connect', () => {
      console.log('HERE');
      setIsConnected(true);
    });
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => {
      socket.disconnect(true)
    };
  }, []);




  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form username={username} setUsername={setUsername} socket={socket}/>}/>
        <Route path='/homepage' element={<Homepage socket={socket} username={username} setUsername={setUsername}/>}/>
      </Routes>
    </div>
  );
}

export default App;
