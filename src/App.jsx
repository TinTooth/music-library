import axios  from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MusicTable from './Components/MusicTable/MusicTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  },[]);

  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  
  function filterString(field){
    const filteredSongs = [...songs].sort((a,b)=> (a[field].toLowerCase() > b[field].toLowerCase()) ? 1 : b[field].toLowerCase() > a[field].toLowerCase() ? -1 : 0)
    setSongs(filteredSongs);
  }

  return (  
    <div>
      <MusicTable songs={songs} setSongs= {setSongs} getAllSongs = {getAllSongs}/>
    </div>
  );
}

export default App;
