import React from "react";
import ActionButtons from "../ActionButtons/ActionButtons";

const MusicTable = ({songs,setSongs,getAllSongs}) => {

    function filter(field){
        const filteredSongs = [...songs].sort((a,b)=> (a[field] > b[field]) ? 1 : b[field] > a[field] ? -1 : 0)
        setSongs(filteredSongs);
    }

    function filterString(field){
        const filteredSongs = [...songs].sort((a,b)=> (a[field].toLowerCase() > b[field].toLowerCase()) ? 1 : b[field].toLowerCase() > a[field].toLowerCase() ? -1 : 0)
        setSongs(filteredSongs);
    }

    const handleSongClick = () => { filter('id')};
    const handleTitleClick = () => { filterString('title')};
    const handleArtistClick = () => { filterString('artist')};
    const handleAblumClick = () => { filterString('album')};
    const handleGenreClick = () => { filterString('genre')};
    const handleReleaseDateClick = () => { filter('release_date')};
    const handleLikesClick = () => { filter('likes')};

    return (  
        <table>
            <thead>
                <tr>
                    <th onClick={handleSongClick}> Song Number</th>
                    <th onClick={handleTitleClick}> Song Title</th>
                    <th onClick ={handleArtistClick}> Artist</th>
                    <th onClick = {handleAblumClick}> Album</th>
                    <th onClick = {handleGenreClick}> Genre</th>
                    <th onClick = {handleReleaseDateClick}> Release Date</th>
                    <th onClick = {handleLikesClick}> Total Likes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
    
                {songs.map((song,i) => {
                    return(
                        <tr key = {i}>
                            <td>{song.id}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td>{song.likes}</td>
                            <td><ActionButtons song = {song} getAllSongs = {getAllSongs} /></td>
                        </tr>
                    )
                })}
            </tbody>

        </table>

    );
}
 
export default MusicTable;