import axios  from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  },[]);


  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  const displayArray = () => {console.log(songs)} 

  return (
    <div>
      <div onClick={displayArray}>CLICK</div>
    </div>
  );
}

export default App;
