import axios from "axios";
import {URL_API} from "../config/backend.config";

class AccountService {
    static async  getAllAccounts() {
        return await axios.get(URL_API + "/accounts?_expand=user");
    }
}

export default AccountService;