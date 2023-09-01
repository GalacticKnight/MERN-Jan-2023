import './App.css';
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
//you need this so that you can you can use routes like in flask

import DisplayAllAlbums from './components/DisplayAllAlbums';
import Nav from './components/Nav';
import AlbumForm from './components/AlbumForm';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<DisplayAllAlbums/>}/>
        {/* path is the http link entry and element is the component */}
        <Route path='/newAlbum/form' element={<AlbumForm/>}/>
      </Routes>
    </div>
  );
}
export default App;