import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import UserService from "../../services/book.service";
import { useFormik } from "formik";
import moment from "moment";

function UserEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        UserService.getUser(id)
            .then(res => {
                const user = res.data;
                const dobConvert = moment(user.dob, "YYYY-MM-DD");
                // Xu ly dob
                formEdit.setValues({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    dob: dobConvert.format("YYYY-MM-DD"),
                    rate: user.rate,
                });
            })
    }, []);

    const formEdit = useFormik({
        initialValues: {
            id: "",
            name: "",
            email: "",
            dob: "",
            rate: "",
        },
        onSubmit: (values) => {
            console.log(values)
            //call api update
            UserService.updateUser(values).then(() => {
                // quay lai /users
                navigate("/users")
            }).catch(err => {
                alert("Error updating user")
            })
        }
    })

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4>Edit User</h4>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={formEdit.handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input type="text" disabled value={formEdit.values.id} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" onChange={formEdit.handleChange} value={formEdit.values.name} name="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" onChange={formEdit.handleChange} value={formEdit.values.email} name="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Birthday</label>
                            <input type="date" onChange={formEdit.handleChange} value={formEdit.values.dob} name="dob" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rate</label>
                            <input type="text" value={formEdit.values.rate} onChange={formEdit.handleChange} name="rate" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-primary">Save</button>
                            <NavLink to={"/users"}>
                                <button className="btn btn-info">Cancel</button>
                            </NavLink>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default UserEdit;