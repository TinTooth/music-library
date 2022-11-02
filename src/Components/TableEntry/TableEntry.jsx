import ActionButtons from "../ActionButtons/ActionButtons";
import React, { useState } from 'react';



const TableEntry = ({song,songs,getAllSongs}) => {
    
    const [refresh,setRefresh] = useState(0);

    return (
        <>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.genre}</td>
        <td>{song.release_date}</td>
        <td>{song.likes}</td>
        <td><ActionButtons song = {song} setRefresh = {setRefresh} refresh = {refresh} getAllSongs = {getAllSongs}/></td>
        </>
    );
}
 
export default TableEntry;