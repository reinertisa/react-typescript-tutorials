import React, {useContext, useState} from 'react';
import {SongContext, type SongType} from "./SongContext.tsx";

export default function SongForm() {
    const {addSong} = useContext(SongContext);
    const [title, setTitle] = useState<string>('');
    const [artist, setArtist] = useState<string>('');
    const [type, setType] = useState<SongType | ''>('');
    const [desc, setDesc] = useState<string>('');


    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    }

    const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setArtist(e.target.value);
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setType(e.target.value as SongType);
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        alert(`${artist} sings this song ${title}`)

        if (type === '') {
            alert('Please select a song type');
            return;
        }

        addSong({title, artist, type, desc});

        setTitle('');
        setArtist('');
        setType('');
        setDesc('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input id="title" type="text" value={title} onChange={handleTitleChange} required={true} />

            <label htmlFor="artist">Artist: </label>
            <input id="artist" type="text" value={artist} onChange={handleArtistChange} required={true} />

            <label htmlFor="type">Song Type</label>
            <select id="type" value={type} onChange={handleTypeChange} required={true}>
                <option value="">-- Select --</option>
                <option value="POP">Pop</option>
                <option value="ROCK">Rock</option>
                <option value="COUNTRY">Country</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}