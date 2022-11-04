import { Modal } from 'react-bootstrap';
import React, {useState } from 'react';



const DeleteSong = ({deleteSong, song}) => {
    
    const [show,setShow] = useState(false);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);
    const deleteClick = () => {
        deleteSong();
        handleClose();
    }
   
    return ( 
        <>
        <button className = "btn btn-warning shadow" onClick = {handleShow}>Delete</button>

        <Modal show = {show} onHide = {handleClose}>
            <Modal.Header className = 'white bp'closeButton>
                <Modal.Title>Deleting Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete "{song.title}"?
            </Modal.Body>
            <Modal.Footer>
                <button className = 'btn btn-secondary' onClick ={handleClose}>Cancel</button>
                <button type = 'submit' className = 'btn btn-warning' onClick = {deleteClick}>Delete Song</button>
            </Modal.Footer>
        </Modal>
        </>

     );
}
 
export default DeleteSong;