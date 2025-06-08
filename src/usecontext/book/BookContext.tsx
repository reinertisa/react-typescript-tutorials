import React, {createContext, useState} from 'react';

export const BookContext = createContext({} as BookContextType);

type BookContextType = {
    books: Book[]
    addBook: (title: string,  author: string, type: BookType,) => void
    removeBook: (id: number) => void
}

type BookContextProviderProps = {
    children: React.ReactNode
}

export type BookType =  'ARTICLE' | 'MAGAZINE'| 'LITERATURE'

export type Book = {
    id: number
    title: string
    type: BookType
    author: string
}

export default function BookContextProvider({children}: BookContextProviderProps) {
    const [books, setBooks] = useState([] as Book[])

    const addBook = (title: string, author: string, type: BookType): void => setBooks([...books, {title, author, type, id: 1}])

    const removeBook = (id: number): void => setBooks(books.filter(book => book.id !== id));

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {children}
        </BookContext.Provider>
    )
}