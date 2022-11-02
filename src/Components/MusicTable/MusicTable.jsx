import React from "react";

const MusicTable = ({songs, filter, filterString}) => {

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
                        </tr>
                    )
                })}
            </tbody>

        </table>

    );
}
 
export default MusicTable;