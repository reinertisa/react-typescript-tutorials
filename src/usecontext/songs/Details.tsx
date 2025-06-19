import {useContext} from 'react';
import {type Song, SongContext} from "./SongContext.tsx";
import Button from "./Button.tsx";

export type SongDetailsProps = {
    song: Song
}
export default function SongDetails({song}: SongDetailsProps) {
    const {removeSong} = useContext(SongContext);
    return (
        <div>
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <div>{song.type}</div>
            <div>{song.desc}</div>
            <div>{song.details}</div>
            <Button clickHandler={() => removeSong(song.id)}>Remove</Button>
        </div>
    )
}