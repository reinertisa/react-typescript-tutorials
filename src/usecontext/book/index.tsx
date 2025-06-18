import {useContext} from 'react';
import {BookContext} from "./BookContext.tsx";
import BookList from "./List.tsx";
import BookForm from "./Form.tsx";

export default function BookPage() {
    const {books} = useContext(BookContext);

    return (
        <div>
           <BookList books={books} />
            <BookForm />
        </div>
    )
}