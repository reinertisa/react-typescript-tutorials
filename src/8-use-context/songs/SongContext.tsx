import React, {createContext, useCallback, useMemo, useState} from 'react';
import {v4 as uuid} from 'uuid';

type SongContextProviderType = {
    children: React.ReactNode
}

export type SongType = 'POP' | 'ROCK' | 'COUNTRY';

export type Song = {
    id: string
    title: string
    artist: string
    type: SongType
    desc?: string
    details?: string
}

type CreateSongInput = Omit<Song, 'id' | 'details'>

type SongContextType = {
    songs: Song[]
    removeSong: (id: (string)) => void
    addSong: (song: CreateSongInput) => void
}

export const SongContext = createContext({} as SongContextType);

export default function SongContextProvider({children}: SongContextProviderType) {
    const [songs, setSongs] = useState([] as Song[])

    const addSong = useCallback(({title, artist, type, desc}: CreateSongInput): void => {
        setSongs(prev => [...prev, {
                id: uuid(),
                title,
                artist,
                type,
                desc
            }])
    }, [])

    const removeSong = useCallback((id: string): void => {
            setSongs(prevSongs=> prevSongs.filter(song => song.id !== id))
    }, [])

    // ✅ Memoize the context value to prevent re-renders of consumers
    const value = useMemo(() => ({
        songs,
        addSong,
        removeSong
    }), [songs, addSong, removeSong]);

    return (
        <SongContext.Provider value={value}>
            {children}
        </SongContext.Provider>
    )
}