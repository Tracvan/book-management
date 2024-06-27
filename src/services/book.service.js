import axios from "axios";
import { URL_API } from "../config/backend.config";

class BookService {
    static async getAllBook() {
        return await axios.get(URL_API + '/books')
    }

    static async deleteBook(id) {
        return await axios.delete(URL_API + '/books/' + id,)
    }

    static async getBook(id) {
        return await axios.get(URL_API + '/books/' + id,)
    }

    static async updateBook(user) {
        return await axios.put(URL_API + '/books/' + user.id, user)
    }

    static async addBook(user) {
        return await axios.post(URL_API + '/books/', user)
    }

}

export default BookService;