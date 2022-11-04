import axios  from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MusicTable from './Components/MusicTable/MusicTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/SearchBar/SearchBar';
function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  },[]);

  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }


  return (
    <div className='bg'>
      <nav className='bp shadow-lg'>Music Managed</nav>
      <div className = "container">
        <div className='row sticky'>
          <SearchBar songs = {songs} setSongs ={setSongs} getAllSongs = {getAllSongs}/>
        </div>
        <div className='row'>
          <MusicTable songs={songs} setSongs= {setSongs} getAllSongs = {getAllSongs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
