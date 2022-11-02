import axios  from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MusicTable from './Components/MusicTable/MusicTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSong from './Components/AddSong/AddSong';

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
    <div>
      <div>
        <AddSong getAllSongs={getAllSongs} />
      </div>
      <div>
        <MusicTable songs={songs} setSongs= {setSongs} getAllSongs = {getAllSongs}/>
      </div>
    </div>
  );
}

export default App;
