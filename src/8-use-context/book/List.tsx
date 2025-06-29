
import BookDetails from "./Details.tsx";
import type {Book} from "./BookContext.tsx";

type BookListProps = {
    books: Book[]
}

export default function BookList({books}: BookListProps) {

    return (
        <ul>
            {books.map(book => <BookDetails key={book.id} book={book} />)}
        </ul>
    )
}