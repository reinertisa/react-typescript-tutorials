import type {Song} from './SongContext.tsx';
import SongDetails from "./Details.tsx";

type SongListProps = {
    songs: Song[]
}

export default function SongList({songs}: SongListProps) {

    return (
        <div>
            {songs.map(song => <SongDetails key={song.id} song={song} />)}
        </div>
    )
}