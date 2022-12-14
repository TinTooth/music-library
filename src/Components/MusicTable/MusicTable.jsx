import React from "react";
import TableEntry from "../TableEntry/TableEntry";
import AddSong from "../AddSong/AddSong";
import "./MusicTable.css";

const MusicTable = ({songs,setSongs,getAllSongs}) => {

    function sort(field){
        const filteredSongs = [...songs].sort((a,b)=> (a[field] > b[field]) ? 1 : b[field] > a[field] ? -1 : 0)
        setSongs(filteredSongs);
    }

    function sortString(field){
        const filteredSongs = [...songs].sort((a,b)=> (a[field].toLowerCase() > b[field].toLowerCase()) ? 1 : b[field].toLowerCase() > a[field].toLowerCase() ? -1 : 0)
        setSongs(filteredSongs);
    }

    const handleTitleClick = () => { sortString('title')};
    const handleArtistClick = () => { sortString('artist')};
    const handleAblumClick = () => { sortString('album')};
    const handleGenreClick = () => { sortString('genre')};
    const handleReleaseDateClick = () => { sort('release_date')};
    const handleLikesClick = () => { sort('likes')};

    return (  
        <table className="text-center table shadow-lg">
            <thead>
                <tr>
                    <th className = 'field' onClick={handleTitleClick}> Song Title</th>
                    <th className = 'field' onClick ={handleArtistClick}> Artist</th>
                    <th className = 'field' onClick = {handleAblumClick}> Album</th>
                    <th className = 'field' onClick = {handleGenreClick}> Genre</th>
                    <th className = 'field' onClick = {handleReleaseDateClick}> Release Date</th>
                    <th className = 'field' onClick = {handleLikesClick}> Total Likes</th>
                    <th> <AddSong getAllSongs={getAllSongs} /> </th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song,i) => {
                    return(
                        <tr key = {i}>
                          <TableEntry song = {song} setSongs = {setSongs} songs = {songs} i = {i}/> 
                        </tr>
                    )
                })}
            </tbody>

        </table>

    );
}
 
export default MusicTable;