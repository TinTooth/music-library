import React, { useState } from 'react';
import {Form } from 'react-bootstrap';

const SearchBar = ({songs, setSongs}) => {
    const [search,setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(songs);
        let temp = search.toLowerCase();
        console.log(temp);
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
            </Form>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>

     );
}
 
export default SearchBar;