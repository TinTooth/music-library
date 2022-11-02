import axios from "axios";

const ActionButtons = ({song, getAllSongs}) => {
    async function deleteSong(){
        let endpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.delete(endpoint)
        if (response.status === 204) {
            getAllSongs()
        } 
    }
    return ( 
        
    
        <div>
            <button onClick = {deleteSong}>Delete</button>
            <button>Update</button>
            <button>Like</button>
        </div>
    );
}
 
export default ActionButtons;