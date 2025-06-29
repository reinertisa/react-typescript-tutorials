import {type Book, BookContext} from "./BookContext.tsx";
import {useContext} from "react";

type BookDetailsProps = {
    book: Book
}

export default function BookDetails({book}: BookDetailsProps) {
    const {removeBook} = useContext(BookContext);

    return (
        <li>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.type}</div>
            <button onClick={() => removeBook(book.id)}>Remove</button>
        </li>
    )
}