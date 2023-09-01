import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import DisplayAllAlbums from './components/DisplayAllAlbums';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import AlbumForm from './components/AlbumForm';
import OneAlbum from './components/OneAlbum';
import Edit from './components/Edit';
import CreateAlbum from './components/CreateAlbum';

function App() {
  const [allAlbums, setAllAlbums] = useState([])
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<DisplayAllAlbums allAlbums={allAlbums} setAllAlbums={setAllAlbums}/>}/>
        <Route path='/newAlbum/form' element={<CreateAlbum allAlbums={allAlbums} setAllAlbums={setAllAlbums}/>}/>
        <Route path='/oneAlbum/:id' element={<OneAlbum/>}/>
        <Route path='/editAlbum/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
