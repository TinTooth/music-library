import axios from "axios";
import UpdateSong from "../UpdateSong/UpdateSong";
import React from 'react';
import DeleteSong from "../DeleteSong/DeleteSong";

const ActionButtons = ({song, setSongs, songs, i}) => {
   
    async function deleteSong(){
        let endpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.delete(endpoint)
        if (response.status === 204) {
            songs.splice(i,1)
            const tempsongs = [...songs];
            setSongs(tempsongs);
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
    // thought about how to make it so you can only like once, but really it would need to be connected to a user.

    return ( 
        <div>
            <UpdateSong updateSong = {updateSong} song = {song}/>
            <button className = "btn btn-secondary shadow" onClick = {likeSong}>Like</button>
            <DeleteSong deleteSong = {deleteSong} song = {song}/>
        </div>
    );
}
 
export default ActionButtons;