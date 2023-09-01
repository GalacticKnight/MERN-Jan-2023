import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import DisplayAllAlbums from './components/DisplayAllAlbums';
import Nav from './components/Nav';
import AlbumForm from './components/AlbumForm';
import OneAlbum from './components/OneAlbum';

function App() {
  const [allAlbums, setAllAlbums] = useState([])//this is global state because of   (element={<AlbumForm allAlbums={allAlbums} setAllAlbums={setAllAlbums}/>)

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={
        <DisplayAllAlbums allAlbums={allAlbums} setAllAlbums={setAllAlbums}
        />}/>

        <Route path='/newAlbum/form' element={// now in
        <AlbumForm allAlbums={allAlbums} setAllAlbums={setAllAlbums}
        />}/>

        <Route path='/oneAlbum/:id' element={<OneAlbum/>}/>
      </Routes>
    </div>
  );
}

export default App;
