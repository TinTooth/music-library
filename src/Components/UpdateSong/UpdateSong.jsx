
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const UpdateSong = ({updateSong, song}) => {
    const [show,setShow] = useState(false);
    const [title,setTitle] = useState(song.title);
    const [artist,setArtist] = useState(song.artist);
    const [album,setAlbum] = useState(song.album);
    const [genre,setGenre] = useState(song.genre);
    const [releaseDate,setDate] = useState(song.release_date);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);

    useEffect(() => {
        setTitle(song.title);
        setArtist(song.artist);
        setAlbum(song.album);
        setGenre(song.genre);
        setDate(song.release_date)
    },[song])

    
    
    const handleSubmit = () => {
        const updatedSong = {id:song.id,title:title,artist:artist,album:album,release_date:releaseDate,genre:genre,likes:song.likes}
        updateSong(updatedSong);
        handleClose();
    }

    return ( 
        <>
            <button className = "btn btn-secondary shadow" onClick = {handleShow}>Update</button>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header className = 'white bp'closeButton>
                    <Modal.Title>Update Song Information</Modal.Title>
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
                            <Form.Label> Release Date</Form.Label>
                            <Form.Control type = 'date' value = {releaseDate} onChange = {(e)=> setDate(e.target.value)}/> 
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className = 'btn btn-secondary' onClick ={handleClose}>Cancel</button>
                    <button type = 'submit' className = 'btn btn-warning' onClick = {handleSubmit}>Update Song</button>
                </Modal.Footer>
            </Modal>
        </>
        
     );
}
 
export default UpdateSong;