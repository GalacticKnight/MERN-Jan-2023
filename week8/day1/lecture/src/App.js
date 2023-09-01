import './App.css';
import {useState} from 'react'
import { UserProvider } from './context/UserContext';
import UserForm from './components/UserForm';
import DisplayUsers from './components/DisplayUsers';
import Todos from './components/Todos';
function App() {
  // const [userList, setUserList] = useState([])
  return (
    <div className="App">
      <UserProvider>
        <UserForm/>
        <DisplayUsers/>
        <Todos/>
      </UserProvider>
    </div>
  );
}

export default App;
