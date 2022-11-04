import React, { useState } from 'react';
import {Form } from 'react-bootstrap';
import DropdownField from '../DropdownField/DropdownField';

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
        let results = songs.filter((song) => {return song.genre.toLowerCase().includes(search.toLowerCase())});
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
        <div className = 'd-flex flex-row justify-content-center bp p-3 rounded-top'>
            <Form className = 'd-flex flex-row'onSubmit = {handleSubmit}>
                <Form.Group className='margin-right'>
                    <Form.Control  placeholder = 'Search Here' type = 'string' value = {search} onChange = {(e)=> setSearch(e.target.value)}/>
                </Form.Group>
                <button className = "btn btn-secondary" type = 'sumbit'>Search</button>
                <DropdownField field = {field} setField = {setField} />
                <button className = "btn btn-secondary" onClick = {getAllSongs}>New Search</button>
            </Form>
        </div> 
     );
}
 
export default SearchBar;