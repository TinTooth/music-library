import React, { useState } from 'react';
import {Form } from 'react-bootstrap';
import DropdownList from "react-widgets/DropdownList";

const SearchBar = ({songs, setSongs, getAllSongs}) => {
    const [search,setSearch] = useState('');
    const [field,setField] = useState('All');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchAll();
        switch(field) {
            case 'Title':
                searchTitle();
                return;
            case 'Artist':
                searchArtist();
                return;
            case 'Album':
                searchAlbum();
                return;
            case 'Genre' :
                searchGenre();
                return;
            default:
                searchAll();
                return;
        }
    }

    const searchGenre = () => {
        let results = songs.filter((song) => {return song.Genre.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }
    const searchAlbum = () => {
        let results = songs.filter((song) => {return song.album.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }
    const searchArtist = () => {
        let results = songs.filter((song) => {return song.artist.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }
    const searchTitle = () => {
        let results = songs.filter((song) => {return song.title.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }

    const searchAll = () => {
        let results = songs.filter((song) => {return song.title.toLowerCase().includes(search.toLowerCase()) ||
            song.artist.toLowerCase().includes(search.toLowerCase()) || 
            song.album.toLowerCase().includes(search.toLowerCase())|| 
            song.genre.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);


    }



    return ( 

        <div>
            <Form onSubmit = {handleSubmit}>
                <Form.Group>
                    <Form.Control  placeholder = 'Search Here' type = 'string' value = {search} onChange = {(e)=> setSearch(e.target.value)}/>
                </Form.Group>
                <button type = 'sumbit'>Search</button>
                <button onClick = {getAllSongs}>New Search</button>
            </Form>
            <div>
            <div>Search Category</div>
            <DropdownList
                value = {field}
                data={["All", "Title", "Artist", "Album",'Genre']}
                onChange = {field => setField(field)}
            />
            </div>
        </div>

     );
}
 
export default SearchBar;