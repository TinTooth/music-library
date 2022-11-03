import axios from "axios";
import UpdateSong from "../UpdateSong/UpdateSong";

const ActionButtons = ({song, setSongs, songs, i}) => {

    async function deleteSong(){
        let endpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.delete(endpoint)
        if (response.status === 204) {
            setSongs(songs)
        } 
    }
    async function updateSong(updatedSong){
        let endpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.put(endpoint,updatedSong)
        if (response.status === 200) {
            songs[i] = updatedSong;
            const tempsongs = [...songs];
            setSongs(tempsongs);
            
        } 
    }

    const likeSong = () => {song.likes+=1; updateSong(song)}

    return ( 
        <div>
            <button onClick = {deleteSong}>Delete</button>
            <UpdateSong updateSong = {updateSong} song = {song} setSongs = {setSongs} songs = {songs}/>
            <button onClick = {likeSong}>Like</button>
        </div>
    );
}
 
export default ActionButtons;