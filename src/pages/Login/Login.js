import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import UserService from "../../services/book.service";
import AccountService from "../../services/account.service";
import { login } from "../../redux/features/users/userSlice";
import { useDispatch } from "react-redux";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formLogin = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            AccountService.getAllAccounts().then(res => {
                const accounts = res.data;
                const accountLogin = accounts.filter(account => account.username === values.username
                    && account.password === values.password);

                if (accountLogin.length > 0) {

                    const userLogin = accountLogin[0].user;
                    dispatch(login(userLogin))
                    navigate("/users")
                }
            })
        }
    })

    return (
        <>
            <div className="d-flex align-items-center py-4 bg-body-tertiary">
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={formLogin.handleSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input type="text" name={"username"}
                                onChange={formLogin.handleChange} value={formLogin.values.username}
                                className="form-control" id="floatingInput" placeholder="username" />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" name={"password"}
                                onChange={formLogin.handleChange} value={formLogin.values.password}
                                className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <p className="text-center m-2">Or</p>
                        <Link to={"/register"}>
                            <button className="btn btn-success w-100 py-2" type="button">Register</button>
                        </Link>
                        <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                    </form>
                </main>



            </div>
        </>
    )
}

export default Login;