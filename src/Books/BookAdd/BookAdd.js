import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import UserService from "../../services/book.service";

const formAddValidate = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    quantity: Yup.number()
        .min(1, 'Too less!')
        .max(1000, 'Too much!')
        .required('Required'),

});

function BookAdd() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // tao doi tuong formik
    const formAdd = useFormik({
        initialValues: {
            title: "",
            createAt: "",
            typeId: ""
        },
        validationSchema: formAddValidate,
        onSubmit: (values) => {
            setLoading(true);
            // call api add
            UserService.addBook(values).then(res => {
                setLoading(false);
                navigate("/books");
            }).catch(err => {
                alert("Error adding book")
            })
        }
    })

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4>Add Book</h4>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={formAdd.handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input name="title" onChange={formAdd.handleChange} type="text" className="form-control" />
                            {formAdd.errors.title && <p className={"text-danger"}>{formAdd.errors.title}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Type</label>
                            <select name="typeId" onChange={formAdd.handleChange} value={formAdd.values.typeId}
                                className="form-select">
                                <option value={1}>Comic</option>
                                <option value={2}>Self Help</option>
                                <option value={3}>Programming Language</option>
                            </select>
                            {formAdd.errors.roleId && <p className={"text-danger"}>{formAdd.errors.typeId}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Create At</label>
                            <input type="date" onChange={formAdd.handleChange} value={formAdd.values.createAt} name="createAt"
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input type="number" max={1000} min={0} value={formAdd.values.quantity} onChange={formAdd.handleChange} name="quantity"
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            {!loading ? (
                                <button type="submit" className="btn btn-primary">Save</button>
                            ) : (
                                <button className="btn btn-primary" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status"
                                        aria-hidden="true"></span>
                                    <span className="sr-only">Loading...</span>
                                </button>
                            )}
                            <Link to={"/users"}>
                                <button className="btn btn-info">Cancel</button>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default BookAdd;