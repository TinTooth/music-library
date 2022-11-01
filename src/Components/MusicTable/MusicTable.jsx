import React from "react";

const MusicTable = ({songs}) => {
    return (  
        <table>
            <thead>
                <tr>
                    <th> Song Title</th>
                    <th> Artist</th>
                    <th> Album</th>
                    <th> Genre</th>
                    <th> Release Date</th>
                    <th> Total Likes</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song,i) => {
                    return(
                        <tr key = {i}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>

    );
}
 
export default MusicTable;