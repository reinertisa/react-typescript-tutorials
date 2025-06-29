import {useContext} from 'react';
import {SongContext} from "./SongContext.tsx";
import SongList from "./List.tsx";
import SongForm from "./Form.tsx";

export default function SongPage() {
    const {songs} = useContext(SongContext);

    return (
        <div>
            <SongList songs={songs} />
            <SongForm />
        </div>
    )
}