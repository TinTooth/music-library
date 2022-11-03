import ActionButtons from "../ActionButtons/ActionButtons";

const TableEntry = ({song,songs,setSongs, i}) => {
    

    return (
        <>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.genre}</td>
        <td>{song.release_date}</td>
        <td>{song.likes}</td>
        <td><ActionButtons song = {song} setSongs = {setSongs} songs = {songs} i = {i} /></td>
        </>
    );
}
 
export default TableEntry;