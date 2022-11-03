import axios from "axios";
import UpdateSong from "../UpdateSong/UpdateSong";
import { Modal } from 'react-bootstrap';
import React, {useState } from 'react';

const ActionButtons = ({song, setSongs, songs, i}) => {
    const [show,setShow] = useState(false);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);

    const deleteClick = () => {
        deleteSong();
        handleClose();
    }


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

    return ( 
        <div>
            <button onClick = {handleShow}>Delete</button>
            <UpdateSong updateSong = {updateSong} song = {song} setSongs = {setSongs} songs = {songs}/>
            <button onClick = {likeSong}>Like</button>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   Are you sure you want to delete "{song.title}"?
                </Modal.Body>
                <Modal.Footer>
                    <button varriant = 'secondary' onClick ={handleClose}>Cancel</button>
                    <button type = 'submit' varriant = 'primary' onClick = {deleteClick}>Delete Song</button>
                </Modal.Footer>
            </Modal>


        </div>

        


    );
}
 
export default ActionButtons;