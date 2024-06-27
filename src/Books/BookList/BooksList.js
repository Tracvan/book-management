import UserSearch from "../BookSearch/UserSearch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookService from "../../services/book.service";

function BooksList() {

    const [books, setBooks] = useState([]);
    const [reRender, setReRender] = useState(true);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        //call api
        BookService.getAllBook()
            .then(res => {
                const data = res.data;
                console.log("hello")
                setBooks(data)
                setListBooksFilter(data)
                setShowSpinner(false)
            })
    }, [reRender])

    const [listBooksFilter, setListBooksFilter] = useState(books);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            setShowSpinner(true)
            // call api delete
            BookService.deleteBook(id)
                .then(res => {
                    console.log("Delete success")
                    setReRender(!reRender);
                    setShowSpinner(false)
                })

        }
    }




    const handleSearch = (keyword) => {
        let booksF = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].name.toLowerCase().includes(keyword.toLowerCase())) {
                booksF.push(books[i]);
            }
        }

        // const userFilter = users.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
        setListBooksFilter(booksF);
    }

    return (
        <>
            <div className="card mt-2">
                <div className="card-header">
                    <div className="row">
                        <div className="col"> Books List
                            <Link to={`/books/create`}>
                                <button className="btn btn-primary">Add Book</button>
                            </Link>
                        </div>
                        <div className="col">
                            <UserSearch search={handleSearch} />
                        </div>
                    </div>


                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        {showSpinner && (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                    </div>


                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Book ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Type</th>
                                <th scope="col">Create At</th>
                                <th scope="col">Quantity</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={"tr" + index}>
                                    <th scope="row">{index + 1}</th>
                                    <th scope="row">{'BookID-' + book.id}</th>
                                    <td>{book.title}</td>
                                    <td>{book.type}</td>
                                    <td>{book.createAt}</td>
                                    <td>{book.quantity}</td>

                                    <td>
                                        <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete
                                        </button>
                                        <Link to={`/books/${book.id}/edit`}>
                                            <button className={"btn btn-primary"}>Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BooksList;