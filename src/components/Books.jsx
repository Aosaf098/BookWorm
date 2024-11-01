import { useEffect, useState } from "react"
import Book from "./Book"


const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
  return (
    <>
     <div className="my-14 lg:w-[85%] mx-auto space-y-6">
        <div>
            <h1 className="text-5xl text-center font-sora font-bold">Books</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6">
            {
                books.map(book => <Book key={book.bookId} book={book}/>)
            }
        </div>
     </div>
    </>
  )
}

export default Books
