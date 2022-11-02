import axios from "axios";

const ActionButtons = ({song, getAllSongs}) => {
    async function deleteSong(){
        let endpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.delete(endpoint)
        if (response.status === 204) {
            getAllSongs()
        } 
    }
    async function likeSong(){
        let endpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const updatedSong = {title:song.title,artist:song.artist,album:song.album,release_date:song.release_date,genre:song.genre,likes:song.likes+1}
        const response = await axios.put(endpoint,updatedSong)
        if (response.status === 200) {
            getAllSongs()
        } 
    }



    return ( 
        
    
        <div>
            <button onClick = {deleteSong}>Delete</button>
            <button>Update</button>
            <button onClick = {likeSong}>Like</button>
        </div>
    );
}
 
export default ActionButtons;