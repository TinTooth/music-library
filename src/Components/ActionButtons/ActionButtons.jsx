import axios from "axios";
import UpdateSong from "../UpdateSong/UpdateSong";

const ActionButtons = ({song, refresh, setRefresh, getAllSongs}) => {

    async function deleteSong(){
        let endpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.delete(endpoint)
        if (response.status === 204) {
            getAllSongs()
        } 
    }
    async function updateSong(updatedSong){
        let endpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.put(endpoint,updatedSong)
        if (response.status === 200) {
            getAllSongs()
        } 
    }

    const likeSong = () => {song.likes+=1; updateSong(song)}

    return ( 
        
    
        <div>
            <button onClick = {deleteSong}>Delete</button>
            <UpdateSong updateSong = {updateSong} song = {song} setRefresh = {setRefresh} refresh = {refresh}/>
            <button onClick = {likeSong}>Like</button>
        </div>
    );
}
 
export default ActionButtons;