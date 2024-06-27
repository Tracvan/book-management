import './App.css';

import { Route, Routes } from "react-router-dom";
import Master from "./pages/Master/Master";
import BookAdd from "./Books/BookAdd/BookAdd";
import BookEdit from "./Books/BookEdit/UserEdit";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useSelector } from "react-redux";
import BooksList from './Books/BookList/BooksList';

function App() {
    const auth = useSelector(state => state.auth)

    return (
        <>
            <Routes>
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
                <Route path={"/"} element={<Master />} >
                    <Route path={"/books"} element={<BooksList />} />
                    <Route path={"/books/create"} element={<BookAdd />} />
                    <Route path={"/books/:id/edit"} element={<BookEdit />} />
                </Route>
                {/*)}*/}
            </Routes>
        </>
    );
}

export default App;
