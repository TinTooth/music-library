import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const AddSong = ({getAllSongs}) => {
    const [show,setShow] = useState(false);
    const [title,setTitle] = useState('');
    const [artist,setArtist] = useState('');
    const [album,setAlbum] = useState('');
    const [genre,setGenre] = useState('');
    const [releaseDate,setDate] = useState('');
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);

    async function addSong(song){
        const response = await axios.post('http://127.0.0.1:8000/api/music/',song)
        if (response.status = 201){
            await getAllSongs()
        }
    }
    
    const handleSubmit = () => {
        const newSong = {title:title,artist:artist,album:album,release_date:releaseDate,genre:genre,likes:0}
        addSong(newSong)
        handleClose()
    }

    return ( 
        <>
            <button  onClick = {handleShow}>Add Song</button>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Song Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className = 'm-3'>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Title</Form.Label>
                            <Form.Control type = 'string' value = {title} onChange = {(e)=> setTitle(e.target.value)}/> 
                        </Form.Group>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Artist</Form.Label>
                            <Form.Control type = 'string' value = {artist} onChange = {(e)=> setArtist(e.target.value)}/> 
                        </Form.Group>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Album</Form.Label>
                            <Form.Control type = 'string' value = {album} onChange = {(e)=> setAlbum(e.target.value)}/> 
                        </Form.Group>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Genre</Form.Label>
                            <Form.Control type = 'string' value = {genre} onChange = {(e)=> setGenre(e.target.value)}/> 
                        </Form.Group>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control  type = 'date' value = {releaseDate} onChange = {(e)=> setDate(e.target.value)}/> 
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button varriant = 'secondary' onClick ={handleClose}>Cancel</button>
                    <button type = 'submit' varriant = 'primary' onClick = {handleSubmit}>Add Song</button>
                </Modal.Footer>
            </Modal>
        </>
        
     );
}
 
export default AddSong;