import React, {useContext, useState} from "react";
import {BookContext, type BookType} from "./BookContext.tsx";


export default function BookForm() {
    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [type, setType] = useState<BookType | ''>('');

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>): void => setAuthor(e.target.value);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value);

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => setType(e.target.value as BookType);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (type === '') {
            alert('Please select a book type');
            return;
        }
        addBook(title, author, type);
        setTitle('');
        setAuthor('');
        setType('LITERATURE');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={title} onChange={handleTitleChange} required={true} />

            <label htmlFor="author">Author</label>
            <input id="author" type="text" value={author} onChange={handleAuthorChange} required={true} />

            <label htmlFor="type">Type</label>
            <select id="type" value={type} onChange={handleTypeChange}>
                <option value="">-- Select --</option>
                <option value="LITERATURE">Literature</option>
                <option value="ARTICLE">Article</option>
                <option value="MAGAZINE">Magazine</option>
            </select>

            <button type="submit">Add a book</button>
        </form>
    )
}